{/* <html>
    <body>
        <input type="text"></input>
        <button onclick="addTodo()">ADD TO DO</button>



        <script>
            function addTodo() {
                const input = document.querySelector("input");
                const todoText = input.value;

                const li = document.createElement("li");
                li.textContent = todoText;

                document.body.appendChild(li);
                input.value = "";
            }
        </script>
    </body>
</html> */



<!DOCTYPE html>
<html>
    <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>TO-DO-APPLICATION</title>
    </head>

    <body>
      <h1>TO DO APPLICATION</h1>
      <h3>1.eGGS</h3>
      <h3>2.bread</h3>
      <h3>3.fish & chips</h3>


      <div>
        <input type="text" placeholder="add items"></input>
        <button onclick="additems()"></button>
      </div>
      



      <script>
        function additems()
        {
            var input = document.querySelector("input");
            var item = input.value;

            var li = document.createElement("div");
            div.textContent = item;


            document.body.appendChild(li);
        }
      </script>
    </body>
</html>