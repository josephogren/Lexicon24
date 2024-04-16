namespace MVC_Ex11.Models
{
    public class Product
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string ProductId { get; set; } = Guid.NewGuid().ToString();

        public string ProductName { get; set; } = string.Empty;

        public string Category { get; set; }

        public string Shelf { get; set; }


        public int Price { get; set; }        

        public int Count { get; set; }  


        // CONSTRUCTOR 
        public Product() 
        {
            Console.WriteLine("new Product created!");
        }

                    
    }
}
