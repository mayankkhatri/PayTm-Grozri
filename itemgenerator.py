# Askin Prompts 
import pyperclip

product_name = ""
quantity = ""
cost_price = ""
sell_price = ""
image = ""

def html():
  code = f"""
  <article class="item carousel-cell">
      <div class="price">
        <span class="cost">₹{cost_price}</span><span class="sell">₹{sell_price}</span>
      </div>
      <div class="photo">
        <img
          src="{image}"
          alt=""
        />
      </div>
      <h4 class="product-name">
        {product_name} <span class="quantity">{quantity}</span>
      </h4>
      <a class="add-cart" href="#top-picks" onClick="return false;"
        >Add to Basket</a
      >
    </article>
  """
  print("Code :", code)
  pyperclip.copy(code)

def jsobj():
  tag = product_name.lower()
  newtag = tag.replace(" ", "")
  print(newtag)
  code = f"""
    name: "{product_name}",
    tag: "{newtag}",
    price: {sell_price},
    incart: 0,
    links:
      "{image}",
  """
  
  print("JS Code is :", code)
  pyperclip.copy(code)

while True: 
  product_name = input("Enter Product Name : \n")
  quantity = input("Enter Product Quantity : \n")
  cost_price = input("Enter Product Cost Price : \n")
  sell_price = input("Enter Product Sell Price : \n")
  image = input("Enter Image Link : \n")

  html()

  input("Enter When Ready to create JS Object \n")

  jsobj()

  print("Object Generated Successfully !! \n")