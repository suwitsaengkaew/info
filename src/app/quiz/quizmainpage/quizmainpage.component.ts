import { Component, OnInit } from '@angular/core';
import { QuizAnswersModel } from './quizanswer.model';

@Component({
  selector: 'app-quizmainpage',
  templateUrl: './quizmainpage.component.html',
  styleUrls: ['./quizmainpage.component.css']
})
export class QuizmainpageComponent implements OnInit {
  _prevSelected: any;
  question = [
    {
      number: 'Quest1',
      answer: [
        { question: 'Quest1', answer: 'Quest1_AnswerA', finalanswer: false },
        { question: 'Quest1', answer: 'Quest1_AnswerB', finalanswer: false },
        { question: 'Quest1', answer: 'Quest1_AnswerC', finalanswer: false },
        { question: 'Quest1', answer: 'Quest1_AnswerD', finalanswer: true }
      ]
    },
    {
      number: 'Quest2',
      answer: [
        { question: 'Quest2', answer: 'Quest2_AnswerA', finalanswer: false },
        { question: 'Quest2', answer: 'Quest2_AnswerB', finalanswer: true },
        { question: 'Quest2', answer: 'Quest2_AnswerC', finalanswer: false },
        { question: 'Quest2', answer: 'Quest2_AnswerD', finalanswer: false }
      ]
    }
  ];

  answer: QuizAnswersModel[] = [];
  constructor() { }

  ngOnInit() {
  }

  onRadioChange(evt: QuizAnswersModel) {
    const _answer = this.answer;
    const _question = evt.question;
    if (_answer.length === 0) {
      this.pushtoarray(evt);
    } else {
      const arrlen = _answer.length;
      let checkduplicate: number;
      _answer.forEach((chkdup) => checkduplicate = chkdup.question.indexOf(evt.question));
      if (checkduplicate !== -1) {
        // duplication
        const _index = _answer.findIndex(item => item.question === evt.question);
        _answer[_index].answer = evt.answer;
        _answer[_index].finalanswer = evt.finalanswer;
        this.answer = _answer;
        // console.log(_index);
      } else {
        // not duplication
        // const _index = _answer.findIndex(item => item.question === evt.question);
        // console.log(_index);
        this.pushtoarray(evt);
      }
      // for (let i = 0; i < arrlen; i++) {
      //   _answer[i].question
      //   if (_answer[i].question === _question) {
      //     _answer[i].answer = evt.answer;
      //     _answer[i].finalanswer = evt.finalanswer;
      //   } else {
      //     this.pushtoarray(evt);
      //   }
      // }
    }
    // const question = evt[0];
    // console.log(question);
    // const arrlen = this.answer.length;
    // console.log(arrlen);
    // if (arrlen === 0) {
    //   this.pushtoarray(evt);
    // } else {
    //   for (let i = 0; i < arrlen; i++) {
    //     console.log(this.answer[i].question);
    //     if (this.answer[i].question === question) {
    //       // this.answer[i].question = evt[0];
    //       this.answer[i].answer = evt[1];
    //       this.answer[i].finalanswer = evt[2];
    //     } else {
    //       console.log(i);
    //       console.log(evt);
    //       this.pushtoarray(evt);
    //     }
    //   }

      // this.answer.forEach((chkdup) => {
      // if (chkdup.question !== question) {
      // this.pushtoarray(evt);
      // const arrayindex = this.answer.findIndex(item => item.question = question);
      // this.answer[arrayindex].question = evt[0];
      // this.answer[arrayindex].answer = evt[1];
      // this.answer[arrayindex].finalanswer = evt[2];
      // }
      // console.log(this.answer.length);
      // console.log(chkdup);
      // checkarrayduplicate = chkdup.question.indexOf(question);
      // console.log(checkarrayduplicate);
      // });

      // if (checkarrayduplicate !== -1) {
      //   const arrayindex = this.answer.findIndex(item => item.question = question);
      //   console.log(arrayindex);
      // } else {
      //   this.pushtoarray(evt);
      // }
    // }
    console.log(this.answer);
  }

  private pushtoarray(evt) {
    this.answer.push(evt);
  }
}
