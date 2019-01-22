var tasksList = new Vue({
    el:'#tasks-list',
    data:{
        header:'Tasks List App',
        state:'default',
        newTask:'',
        tasks:[
            {
                id:1,
                label:'Do 3 Leetcode',
                finished:false,
            },
            {
                id:2,
                label:'Learn Vue.js fundamentals',
                finished:true,
            },
            {
                id:3,
                label:'Practice English',
                finished:false,
            },
            {
                id:4,
                label:'Play Basketball',
                finished:false,
            }
        ]
    },
    computed: {
        characterCount(){
            return this.newTask.length;
        },
        idbegin(){
            return this.tasks.length
        }
    },
    methods: {
        saveTask:function(){
            this.tasks.push({
                label:this.newTask,
                finished:false,
                id:this.idbegin+1
            })
            this.newTask = ''
        },
        toggleTask:function(item){
            item.finished = !item.finished
        },
        deleteTask:function(id){
            for (var i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id){
                    this.tasks.splice(i,1)
                }
            }
        }
    }
})