import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answer: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },{
            id: "Question2",
            question: "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. ",
            answer: {
                a: "public ExtendedController(ApexPages.StandardController cntrl) { }",
                b: "ApexPages.currentPage().getParameters() put(input', 'TestValue)",
                c: "Test.setCurrentPage(pageRef)",
                
            },
            correctAnswer: "a"
        },{
            id: "Question3",
            question: "Which statement about the Lookup Relationship between a Custom Object and a Standard Object is correct?",
            answer: {
                a: "The Lookup Relationship on the Custom Object can prevent the deletion of the Standard Object.",
                b: "The Custom Object will be deleted when the referenced Standard Object is delete",
                c: "String nextPage = controller.save().getUrl();"
            },
            correctAnswer: "a"
        }, {
            id: "Question4",
            question: "Which of the file is invalid in LWC component folder?",
            answer: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        }
    ]
    //for storing answers
    selected = {}

    //store correct answer
    correctAnswers = 0;

    // store submitted answer
    isSubmitted = false;

    changeHandler(event) {
        const {name, value} = event.target;
        //add the selected answers to selected {}
        this.selected = {...this.selected, [name]:value};
    }

    submitHandler(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
    }

    resetHandler() {
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    get isScoredColor() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

}