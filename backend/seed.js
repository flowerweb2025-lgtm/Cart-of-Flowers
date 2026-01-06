const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

dotenv.config();

// Sample flower products
const sampleProducts = [
  // Romance & Love Collection
  {
    name: "Red Rose Elegance",
    description: "12 premium red roses arranged with baby's breath and greenery",
    price: 299,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=500"
  },
  {
    name: "Passionate Romance",
    description: "24 long-stemmed red roses in a crystal vase",
    price: 499,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
  },
  {
    name: "Love's Embrace",
    description: "Mixed roses and orchids in pink and red tones",
    price: 399,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500"
  },
  {
    name: "Eternal Love",
    description: "50 premium red roses in an elegant arrangement",
    price: 799,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500"
  },
  {
    name: "Romantic Dream",
    description: "Red and white roses with eucalyptus",
    price: 349,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1477616291387-4201ba26f656?w=500"
  },
  {
    name: "Sweet Devotion",
    description: "Pink roses with baby roses and greenery",
    price: 279,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500"
  },
  {
    name: "Classic Romance",
    description: "18 red roses with premium wrapping",
    price: 429,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500"
  },
  {
    name: "Love Bouquet",
    description: "Mixed romantic flowers in burgundy tones",
    price: 319,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1503285292048-c29a7e2a3d45?w=500"
  },
  {
    name: "Heart's Desire",
    description: "Heart-shaped arrangement of red roses",
    price: 549,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1481250641129-8dc6ca6c3b98?w=500"
  },
  {
    name: "Tender Love",
    description: "Soft pink roses with white lilies",
    price: 379,
    category: "Romance & Love",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500"
  },

  // Birthday Collection
  {
    name: "Birthday Joy",
    description: "Bright mixed flowers with birthday balloon",
    price: 259,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1490971024795-51d7a1ca2ade?w=500"
  },
  {
    name: "Celebration Burst",
    description: "Vibrant sunflowers and daisies arrangement",
    price: 289,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500"
  },
  {
    name: "Happy Birthday Deluxe",
    description: "Large mixed bouquet with seasonal flowers",
    price: 399,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500"
  },
  {
    name: "Colorful Wishes",
    description: "Rainbow mix of gerbera daisies",
    price: 269,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1464548739168-2c96c8d75a77?w=500"
  },
  {
    name: "Birthday Bliss",
    description: "Pastel roses and carnations with ribbon",
    price: 249,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500"
  },
  {
    name: "Festive Surprise",
    description: "Mixed tropical flowers in bright colors",
    price: 329,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500"
  },
  {
    name: "Joyful Celebration",
    description: "Cheerful sunflowers with blue accents",
    price: 279,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1517517935744-82598f50fe9c?w=500"
  },
  {
    name: "Sweet Birthday",
    description: "Pink and white flowers with chocolate",
    price: 349,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=500"
  },
  {
    name: "Party Flowers",
    description: "Festive mix with colorful wrapping",
    price: 239,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1478146057014-dc9cb48c06f7?w=500"
  },
  {
    name: "Birthday Elegance",
    description: "Sophisticated arrangement with orchids",
    price: 449,
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=500"
  },

  // Wedding Collection
  {
    name: "Bridal Bouquet Classic",
    description: "White roses and peonies for the bride",
    price: 599,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500"
  },
  {
    name: "Wedding Romance",
    description: "Blush pink and cream arrangement",
    price: 699,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1522057306606-3c0870aaa221?w=500"
  },
  {
    name: "Elegant Wedding",
    description: "Cascading white orchids and roses",
    price: 899,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500"
  },
  {
    name: "Garden Wedding",
    description: "Rustic wildflower wedding bouquet",
    price: 499,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500"
  },
  {
    name: "Luxury Bridal",
    description: "Premium white flowers with crystals",
    price: 999,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500"
  },
  {
    name: "Bridesmaid Bouquet",
    description: "Coordinating pink and white arrangement",
    price: 349,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=500"
  },
  {
    name: "Boutonniere Set",
    description: "Set of 6 matching boutonnieres",
    price: 179,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500"
  },
  {
    name: "Wedding Centerpiece",
    description: "Tall elegant centerpiece arrangement",
    price: 449,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1478146057014-dc9cb48c06f7?w=500"
  },
  {
    name: "Reception Flowers",
    description: "Mixed arrangements for tables",
    price: 299,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=500"
  },
  {
    name: "Ceremony Arch",
    description: "Floral decoration for wedding arch",
    price: 1299,
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=500"
  },

  // Congratulations Collection
  {
    name: "Success Celebration",
    description: "Bold orange and yellow arrangement",
    price: 319,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500"
  },
  {
    name: "Achievement Bouquet",
    description: "Sophisticated white and green flowers",
    price: 359,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500"
  },
  {
    name: "Proud Moment",
    description: "Vibrant mixed flowers with gold accents",
    price: 389,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
  },
  {
    name: "Well Done",
    description: "Cheerful sunflowers and roses",
    price: 299,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1517517935744-82598f50fe9c?w=500"
  },
  {
    name: "Congratulations Deluxe",
    description: "Premium arrangement with lilies",
    price: 449,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500"
  },
  {
    name: "New Beginning",
    description: "Fresh white and purple flowers",
    price: 339,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1464548739168-2c96c8d75a77?w=500"
  },
  {
    name: "Victory Flowers",
    description: "Bold red and gold arrangement",
    price: 369,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500"
  },
  {
    name: "Graduate Special",
    description: "School colors custom arrangement",
    price: 329,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500"
  },
  {
    name: "Promotion Bouquet",
    description: "Elegant orchids and roses",
    price: 399,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=500"
  },
  {
    name: "Milestone Celebration",
    description: "Large festive mixed arrangement",
    price: 479,
    category: "Congratulations",
    image: "https://images.unsplash.com/photo-1490971024795-51d7a1ca2ade?w=500"
  },

  // Sympathy Collection
  {
    name: "Peaceful Memories",
    description: "White lilies and roses sympathy arrangement",
    price: 349,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500"
  },
  {
    name: "Eternal Rest",
    description: "White and cream flowers for funeral",
    price: 399,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500"
  },
  {
    name: "Sympathy Wreath",
    description: "Traditional white flower wreath",
    price: 549,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500"
  },
  {
    name: "In Loving Memory",
    description: "Elegant white and purple arrangement",
    price: 429,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500"
  },
  {
    name: "Graceful Tribute",
    description: "Standing spray with white flowers",
    price: 599,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500"
  },
  {
    name: "Comfort & Light",
    description: "Soft pastel sympathy bouquet",
    price: 329,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500"
  },
  {
    name: "Heavenly Peace",
    description: "All white elegant arrangement",
    price: 449,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500"
  },
  {
    name: "Serene Sympathy",
    description: "White roses and orchids",
    price: 479,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500"
  },
  {
    name: "Compassion Bouquet",
    description: "Gentle white and green flowers",
    price: 359,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1522057306606-3c0870aaa221?w=500"
  },
  {
    name: "Remembrance",
    description: "Classic white lily arrangement",
    price: 389,
    category: "Sympathy",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500"
  },

  // Just Because Collection
  {
    name: "Thinking of You",
    description: "Cheerful mixed flowers in bright colors",
    price: 229,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500"
  },
  {
    name: "Smile Bouquet",
    description: "Happy yellow and white arrangement",
    price: 249,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500"
  },
  {
    name: "Surprise Delight",
    description: "Mixed seasonal flowers",
    price: 279,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500"
  },
  {
    name: "Brighten Your Day",
    description: "Sunflowers and daisies mix",
    price: 239,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1517517935744-82598f50fe9c?w=500"
  },
  {
    name: "Random Act",
    description: "Beautiful mixed roses",
    price: 269,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1477616291387-4201ba26f656?w=500"
  },
  {
    name: "Sweet Gesture",
    description: "Pastel flowers in soft tones",
    price: 259,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500"
  },
  {
    name: "Everyday Beauty",
    description: "Classic mixed arrangement",
    price: 219,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1490971024795-51d7a1ca2ade?w=500"
  },
  {
    name: "Friendship Flowers",
    description: "Cheerful gerberas and roses",
    price: 249,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1464548739168-2c96c8d75a77?w=500"
  },
  {
    name: "Simple Pleasures",
    description: "Elegant white and green bouquet",
    price: 239,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500"
  },
  {
    name: "Spontaneous Joy",
    description: "Wildflower mix arrangement",
    price: 229,
    category: "Just Because",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500"
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if products already exist
    const count = await Product.countDocuments();
    if (count > 0) {
      console.log(`Database already has ${count} products`);
      console.log('Skipping seed (delete existing products first if you want to re-seed)');
      process.exit(0);
    }

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${sampleProducts.length} products!`);
    
    // Display summary
    const categories = [...new Set(sampleProducts.map(p => p.category))];
    console.log('\nProducts by category:');
    for (const category of categories) {
      const categoryCount = sampleProducts.filter(p => p.category === category).length;
      console.log(`  - ${category}: ${categoryCount} products`);
    }

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();