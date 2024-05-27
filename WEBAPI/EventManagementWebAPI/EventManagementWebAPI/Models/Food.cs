namespace EventManagementWebAPI.Models
{
    public class Food
    {
        public int FoodID { get; set; }
        public int FoodType { get; set; }
        public  int MealType{ get; set; }
        public int DishType { get; set; }
        public string DishName { get; set; }
        public string DishImage { get; set; }
        public decimal DishCost { get; set; }
    }
}
