import { Component, OnInit } from '@angular/core';

export class Product {
  public productId = 0;
  public productDescription = '';
  public qty = 0;
  public price = 0.00;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product: Product;
  public products: Product[];
  public cart: Product[];

  constructor() {
    this.product = new Product();
    this.products = [];
    this.cart = [];
  }

  ngOnInit(): void { }

  public addProduct() {

    const productId = (document.getElementById('productId') as HTMLInputElement).value;
    const productDescription = (document.getElementById('productDescription') as HTMLInputElement).value;
    const qty = (document.getElementById('quantity') as HTMLInputElement).value;
    const price = (document.getElementById('price') as HTMLInputElement).value;

    const newProduct = new Product();

    newProduct.productId = Number(productId);
    newProduct.productDescription = productDescription;
    newProduct.qty = Number(qty);
    newProduct.price = Number(price);

    this.products.push(newProduct);

    let html = '<table border=\'1|1\' >';
    html += '<td>Product ID</td>';
    html += '<td>Product Description</td>';
    html += '<td>Quantity</td>';
    html += '<td>Price</td>';
    html += '<td>Action</td>';

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      html += '<tr>';
      html += '<td>' + this.products[i].productId + '</td>';
      html += '<td>' + this.products[i].productDescription + '</td>';
      html += '<td>' + this.products[i].qty + '</td>';
      html += '<td>' + this.products[i].price + '</td>';
      // tslint:disable-next-line: max-line-length
      html += '<td><button type=\'submit\' (click)=\'deleteProduct("' + this.products[i].productId + '", this);\'/>Delete Item</button> &nbsp <button type=\'submit\' onClick=\'addCart("' + this.products[i].productId + '", this);\'/>Add to Cart</button></td>';
      html += '</tr>';
    }
    html += '</table>';
    document.getElementById('New product').innerHTML = html;

    document.getElementById('resetbtn').click();
  }
  public deleteProduct(productId: number, e: any) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId === productId) {
        this.products.splice(i, 1);
      }
    }
  }

  public newCart(productId: number) {

    let cartItem = new Product();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId === productId) {
        cartItem.productId = null;

        // tslint:disable-next-line: prefer-for-of
        for (let k = 0; k < this.cart.length; k++) {
          if (this.cart[k].productId === this.products[i].productId) {
            cartItem = this.cart[k];
            this.cart[k].qty++;
            break;
          }
        }
        if (cartItem == null) {
          cartItem = Object.assign(
            {
              product: this.products[i],
              product_qty: this.products[i].qty
            });
          this.cart.push(cartItem);
        }
      }
    }
    this.renderCartTable();
  }


  public renderCartTable() {
    let html = '';
    const element = document.getElementById('cartContent');
    element.innerHTML = '';

    html += '<table id=\'tblCart\' border=\'1|1\'>';
    html += '<tr><td>Product ID</td>';
    html += '<td>Product Description</td>';
    html += '<td>Quantity</td>';
    html += '<td>Price</td>';
    html += '<td>Total</td>';
    html += '<td>Action</td></tr>';

    let GrandTotal = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.cart.length; i++) {
      html += '<tr>';
      html += '<td>' + this.cart[i].productId + '</td>';
      html += '<td>' + this.cart[i].productDescription + '</td>';
      html += '<td>' + this.cart[i].qty + '</td>';
      html += '<td>' + this.cart[i].price + '</td>';
      /* html += '<td>' + parseFloat(this.cart[i].price)) * parseInt(this.cart[i].product_qty) + '</td>'; */
      // tslint:disable-next-line: max-line-length
      html += '<td><button type=\'submit\' onClick=\'subtractQuantity("' + this.cart[i].productId + '", this);\'/>Subtract Quantity</button> &nbsp<button type=\'submit\' onClick=\'addQuantity("' + this.cart[i].productId + '", this);\'/>Add Quantity</button> &nbsp<button type=\'submit\' onClick=\'removeItem("' + this.cart[i].productId + '", this);\'/>Remove Item</button></td>';
      html += '</tr>';

      GrandTotal += (this.cart[i].price) * (this.cart[i].qty);
    }

    document.getElementById('Total').innerHTML = String(GrandTotal);  // 'String' otherwise 'Type number is not assignable to type string'
    html += '</table>';
    element.innerHTML = html;
  }

  public subtractQuantity(productId: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].productId === productId) {
        this.cart[i].qty--;
      }
      if (this.cart[i].qty === 0) {
        this.cart.splice(i, 1);
      }
    }
    this.renderCartTable();
  }


  public addQuantity(productId: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].productId === productId) {
        this.cart[i].qty++;
      }
    }
    this.renderCartTable();
  }


  public removeItem(productId: number) {

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].productId === productId) {
        this.cart.splice(i, 1);
      }
    }
    this.renderCartTable();
  }

}
