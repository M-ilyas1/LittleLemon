// src/components/FoodDetail.jsx
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const foodData = [
  {
    id: 1,
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.1280.720.suffix/1490188710731.jpeg',
    title: 'Delicious Pizza',
    description: 'Cheesy and delightful pizza topped with fresh ingredients.',
    rating: 4,
    price: '$12.99',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUW9GlUs0mx4T5UxSPndlPOx9RlUTqSf2_u_uWI0vt9ma6VN6M8gdrrC_QNaNztPD1og&usqp=CAU',
    title: 'Tasty Burger',
    description: 'Juicy burger with crispy lettuce, tomato, and cheese.',
    rating: 5,
    price: '$9.99',
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5okG0tz2dWr36k2p9gxbFmqoM4AeW1e3pPQ&s",
    title: "Pasta Delight",
    description: "Creamy pasta with rich flavors and a touch of herbs.",
    rating: 4,
    price: "$11.99",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0LjrsgkVi79EIFUmXABwDTKKS0go6rn-S1xDIU7Tmo_UecYTu81-v6nfNHFrwbZ0YcA&usqp=CAU",
    title: "Healthy Salad",
    description: "Fresh and crispy salad with a variety of vegetables.",
    rating: 4,
    price: "$7.99",
  },
  {
    id: 5,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/04/Top-10-foods-to-try-in-Dubai-f336a61.jpg?quality=90&resize=556,505",
    title: "Sushi Platter",
    description: "Assorted sushi with fresh fish and rice.",
    rating: 5,
    price: "$15.99",
  },
  {
    id: 6,
    image:
      "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
    title: "Grilled Chicken",
    description: "Tender grilled chicken with a side of vegetables.",
    rating: 4,
    price: "$13.99",
  },
  {
    id: 7,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/smoothie-bowl-with-banana-strawberry-blueberry-royalty-free-image-1703624084.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*",
    title: "Ice Cream Sundae",
    description: "Delicious ice cream topped with chocolate and nuts.",
    rating: 5,
    price: "$6.99",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMLCeU0N0SZiuSTs59-10bRX9gedYkWLMHQ&s",
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake with a creamy frosting.",
    rating: 5,
    price: "$8.99",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uOaLiP6G5_Y5VSbSNlddEfNCO-Lpf1ttSi5qCEh9BQjM_htNUBqgklsplTbzuyX7BQc&usqp=CAU",
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake with a creamy frosting.",
    rating: 5,
    price: "$8.99",
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRl9FiNtuSdTWErhrutQ33rwGrBw83S9M59UzGk9BZoabeMKCkE7a7WwNfmzdc7rHPs&usqp=CAU",
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake with a creamy frosting.",
    rating: 5,
    price: "$8.99",
  },
];

const FoodDetail = () => {
  const { id } = useParams();
  const food = foodData.find(item => item.id === parseInt(id));

  if (!food) {
    return <div>Food item not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="w-[30%] bg-white shadow-md rounded-lg overflow-hidden">
        <img src={food.image} alt={food.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{food.title}</h3>
          <div className="flex items-center mb-2">
            {Array(food.rating).fill().map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <div className="text-gray-700 mb-4">{food.description}</div>
          <div className="text-xl font-bold">{food.price}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
