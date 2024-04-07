using EventManagementWebAPI.DAL;

var builder = WebApplication.CreateBuilder(args);

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
builder.Services.AddSingleton<ADMINDAL>(item => new ADMINDAL(config.GetConnectionString("dbcs")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseSession();
app.UseAuthorization();

app.MapControllers();

app.Run();
