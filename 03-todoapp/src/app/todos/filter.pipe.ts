import { Pipe, PipeTransform } from '@angular/core';
import { filtresValided } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtresValided): Todo[] {
    console.log("filter", filter);
    console.log("todos", todos);
    switch(filter){
      case 'Completed':
        return todos.filter(obj=> obj.completed);
      case 'Pending':
        return todos.filter(obj=> !obj.completed);
      default:
        return todos;
    };
  }

}
