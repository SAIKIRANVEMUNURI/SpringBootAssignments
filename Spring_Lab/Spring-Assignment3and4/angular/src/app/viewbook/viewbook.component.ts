import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  /**************************************************************************
   * creating books array of Book type to store the book detail
  /**************************************************************************/
  books: Book[] = [];

  /*************************************************************************
   * creating book instance for every time manupulate the data
   *************************************************************************/

  book: Book = new Book();
  /*************************************************************************
   * seting the flag false after enter the data it will ture and usable
   ************************************************************************/
  editFlag: boolean = false;
  constructor(private bookService: BookService) { }

   /*********************************************************************
   * Method: ngOnInit is life cycle hook called by angular at first
   * params:
   * return:
   * Description: ngOnInit first check the falg value if it is true then check
   *              and loads all the book in the starting and it is
   *              checking if book array length is zero then load book
   *              and set the book into the current array
   *
   * Created Date: 04 MAR 2020
   * Author: Nishant Shrivastav
   ************************************************************************/

  ngOnInit() {
        this.bookService.loadBooks().subscribe(data => {
          this.books = data;
          this.bookService.setBooks(this.books);
        });
  }

  /*********************************************************************
   * Method: removeBook
   * params: bookid
   * return: void
   * Description: this method collecting the value from service deleteBooks method
   *              and delete the specific book
   *
   * Created Date: 04 MAR 2020
   * Author: Nishant Shrivastav
   ************************************************************************/
  removeBook(bookid: number): void {


    this.books = this.bookService.deleteBooks(bookid);
  }

  /*********************************************************************
   * Method: updateBook
   * params: bookid
   * return:
   * Description: this method is updating the book after delete a row
   *
   * Created Date: 04 MAR 2020
   * Author: Nishant Shrivastav
   ************************************************************************/

  updateBook(bookid: number) {

    let tmpbooks: Book[] = this.bookService.getBooks().filter(book => book.id == bookid);
    if (tmpbooks.length > 0) {
      this.book = tmpbooks[0];
      this.editFlag = true;
    }

  }

  /*********************************************************************
   * Method: editBook
   * params:
   * return: void
   * Description: this method is just checking the flag value for enable the
   *              form
   *
   * Created Date: 04 MAR 2020
   * Author: Nishant Shrivastav
   ************************************************************************/
  editBook(): void {
    this.editFlag = false;
  }

}
