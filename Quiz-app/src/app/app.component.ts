import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { MultipleChoice, QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';




@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number;
	questionObj = new QuestionClass();
	questionMult = new MultipleChoice();
	timeLeft: number = 60;
	interval;
	checked: boolean = false;
	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('addQuestionModal') addQuestionModal : ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) { }

	answerArray = [];

	allQuestions: any = [];

	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}
		}
		this.submitModal.show();
		this.HomePage();
	}

	startTimer() {
		this.interval = setInterval(() => {
		  if(this.timeLeft > 0) {
			this.timeLeft--;
		  } else {
			this.submitTest();
			clearInterval(this.interval);
			this.HomePage();
		  }
		},1000)
	  }


	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;
		this.startTimer();

	}
	HomePage() {
		this.isQuestionCardShow = false;
		clearInterval(this.interval);
	}
	addQuestion(){
		this.addQuestionModal.show();
	}
	submitAddQuestion(){
		let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
		quesTemp["id"] = this.allQuestions.length+1;
		this.allQuestions.push(quesTemp);
		this.questionForm.reset();
		this.toastr.success("Question Added Successfully");
		this.addQuestionModal.hide();
	}

	// submitAddMultipleQuestion(){
	// 	let quesTemp = JSON.parse(JSON.stringify(this.questionMult));
	// 	quesTemp["id"] = this.allQuestions.length+1;
	// 	if(quesTemp["a.checked"] = true){
	// 		quesTemp["answers"].push(quesTemp["a.answer"])
	// 	}
	// 	if(quesTemp["b.checked"] = true){
	// 		quesTemp["answers"].push(quesTemp["b.answer"])
	// 	}
	// 	if(quesTemp["c.checked"] = true){
	// 		quesTemp["answers"].push(quesTemp["c.answer"])
	// 	}
	// 	if(quesTemp["d.checked"] = true){
	// 		quesTemp["answers"].push(quesTemp["d.answer"])
	// 	}
	// 	this.allQuestions.push(quesTemp);
	// 	this.questionForm.reset();
	// 	this.toastr.success("Question Added Successfully");
	// 	this.addQuestionModal.hide();
	// }

	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}

	ngOnInit() {

	}

}
