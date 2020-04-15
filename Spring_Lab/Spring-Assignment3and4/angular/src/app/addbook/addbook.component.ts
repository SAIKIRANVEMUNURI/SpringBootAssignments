import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  /*********************************************************************
   *  Instance of Book for manupulation
   **********************************************************************/
  book: Book = new Book();

   /*********************************************************************
   * Method: constructor
   * params:
   * return:
   * Description: constructor injects the bookService and router module
   *
   * Created Date: 04 MAR 2020
   * Author: Nishant Shrivastav
   ************************************************************************/


  constructor(private bookService: BookService, private route: Router) { }


  /********************************************************************************
   * Method: addBook
   * params:
   * return:
   * Description: this method call service addBooks method and add books every time
   *              and routes the page to display all book detail after adding
   * Created Date: 04 MAR 2020
   * Author: Nishant Shrivastav
   **********************************************************************************/

  addBook() {
    console.log("add book");
    this.bookService.insertBooks(this.book).subscribe(data=>{this.book=data});
    this.route.navigateByUrl("/trainerlist");
  }
}
