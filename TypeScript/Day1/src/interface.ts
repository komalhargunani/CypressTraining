
interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);


  interface Square{
    side: number
  }
   
   interface Name extends Square{

    shape: string
   }

   const testinterface: Name = {

    side: 4,
    shape:'square'


   };

   console.log(testinterface);
