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
                d: "String nextPage = controller.save().getUrl();"
            },
            correctAnswer: "a"
        },{
            id: "Question3",
            question: "Which statement about the Lookup Relationship between a Custom Object and a Standard Object is correct?",
            answer: {
                a: "The Lookup Relationship on the Custom Object can prevent the deletion of the Standard Object.",
                b: "The Custom Object will be deleted when the referenced Standard Object is delete"
            },
            correctAnswer: "a"
        }, {
            id: "Question4",
            question: "Which of the file is invalid in LWC component folder?",
            answer: {
                a: ".svg",
                b: ".apex",
                c: ".js",
                d: ".html"
            },
            correctAnswer: "b"
        }
    ]
    //for storing answers
    selected = {}

    changeHandler(event) {
        const {name, value} = event.target;
        this.selected = {...this.selected, [name]:value};
    }

    submitHandler() {

    }

    resetHandler() {

    }

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

}