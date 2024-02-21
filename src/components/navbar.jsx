import Todo from './todo'

const Navbar = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100">
         <div className="h-16 flex items-center p-5  bg-gray-700 font-bold text-xl tracking-widest text-white font-robo">Yapılacaklar Listesi<img class="ml-2" src="https://img.icons8.com/bubbles/50/000000/todo-list.png"/></div>
         <Todo/>
    </div>        
  );
};


export default Navbar;