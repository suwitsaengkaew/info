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
    },
    {
      number: 'Quest3',
      answer: [
        { question: 'Quest3', answer: 'Quest3_AnswerA', finalanswer: true },
        { question: 'Quest3', answer: 'Quest3_AnswerB', finalanswer: false },
        { question: 'Quest3', answer: 'Quest3_AnswerC', finalanswer: false },
        { question: 'Quest3', answer: 'Quest3_AnswerD', finalanswer: false }
      ]
    }
  ];

  finalanswer: QuizAnswersModel[] = [];
  constructor() { }

  ngOnInit() {
    const randomindex = Math.floor(Math.random() * this.question.length);
    const randomarray = this.question[randomindex];
    console.log(randomarray);
  }

  onRadioChange(evt: QuizAnswersModel) {
    const _answer = this.finalanswer;
    const _question = evt.question;
    // console.log(_question);
    if (_answer.length === 0) {
      this.pushtoarray(evt);
    } else {
      const arrlen = _answer.length;
      let checkduplicate = -1;
      _answer.forEach((quiz) => {
        if (_question === quiz.question) {
          checkduplicate = 0;
        }
      });

      console.log(checkduplicate);
      if (checkduplicate !== -1 ) {
        // console.log('Duplicated');
        const _index = _answer.findIndex(item => item.question === _question);
        this.finalanswer.splice(_index, 1);
        this.pushtoarray(evt);
      } else {
        this.pushtoarray(evt);
      }
    }
  }

  private pushtoarray(evt) {
    this.finalanswer.push(evt);
  }

  submit() {
    const numberofquestion = this.question.length;
    const numberoffinalanswer = this.finalanswer.length;
    let trueanswer = 0;
    if (numberofquestion === numberoffinalanswer) {
      this.finalanswer.forEach(_trueanswer => {
        if (_trueanswer.finalanswer) {
          trueanswer += 1;
        }
      });
      alert('คะแนนที่ได้คือ ' + trueanswer + '/' + numberofquestion);
    } else {
      alert('ตอบไม่ครบ');
    }
  }
}
