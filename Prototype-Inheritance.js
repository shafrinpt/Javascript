const animal = {
    speak() {
      console.log("Animal speaks");
    }
  };
  
  const dog = Object.create(animal); // dog inherits from animal
  dog.speak(); // Output: "Animal speaks"
  