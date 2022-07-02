// let UPADTE_POST_SYMBOLS = 'UPADTE-POST-SYMBOLS'
// let SEND_POST = 'SEND-POST';
let store = {
    _state: {
            postsArray:[
                {message:'Hello!', id: 1},
                {message:'it is my first post', id: 2},
                {message:'Third post', id: 3},
                {message:'Shit post', id: 4},
                {message:'thats great', id: 5},
            ],
            currentSymbolsInArea: ''
    },
    getState() {
        return(this._state)
    },
    _callSubscriber () {

    },

    subscriber (observer) {
        this._callSubscriber=observer;
    },


    dispatch(action){
            if(action.type === 'SEND-POST'){
                let newPost ={
                    message: this._state.currentSymbolsInArea,
                    id: 6
                };
                this._state.postsArray.push(newPost);
                this._state.currentSymbolsInArea = ' ';
                this._callSubscriber(this._state);
            } else if(action.type === 'UPADTE-POST-SYMBOLS'){
                
                this._state.currentSymbolsInArea=action.currentText;
                this._callSubscriber(this._state)
            }
        }

    }



    export let updatePostSymbolsCreator = (text) => {
        return{
            type: 'UPADTE-POST-SYMBOLS',
            currentText: text
        }
    }
    export let sendPostCreator = () => {
        return {
            type: 'SEND-POST'
            
        }
    }
     
    export default store;
    window.store = store