using EventManagementWebAPI.DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// Add services to the container.


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true; // Make session cookie essential
    options.IdleTimeout = TimeSpan.FromMinutes(20); // Session timeout duration
});
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "localhost"; // Redis server connection string
});

var provider =builder.Services.BuildServiceProvider();
var config=provider.GetRequiredService<IConfiguration>();
builder.Services.AddSingleton<DAC>(item => new DAC(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<FlowerDal>(item => new FlowerDal(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<VenueDal>(item => new VenueDal(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<EquipmentDaL>(item => new EquipmentDaL(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<LightDal>(item => new LightDal(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<EventsRepository>(item => new EventsRepository(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<VenueRepository>(item => new VenueRepository(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<BookingRepository>(item => new BookingRepository(config.GetConnectionString("dbcs")));


builder.Services.AddSingleton<FoodDal>(item => new FoodDal(config.GetConnectionString("dbcs")));
builder.Services.AddSingleton<ForgotPassword>(item => new ForgotPassword(config.GetConnectionString("dbcs")));



//var key = ("your_super_secret_key_here"); // Use a secret key stored securely
string GenerateJwtKey()
{
    byte[] key = new byte[32]; // 256 bits
    using (var rng = RandomNumberGenerator.Create())
    {
        rng.GetBytes(key);
    }
    return Convert.ToBase64String(key);
}
var base64Key = GenerateJwtKey();
//var base64Key = GenerateJwtKey();
configuration["Jwt:SecretKey"] = base64Key;
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false; // Set to true in production
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(base64Key)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactCorsPolicy",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseSession();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("ReactCorsPolicy");

app.MapControllers();

app.Run();
