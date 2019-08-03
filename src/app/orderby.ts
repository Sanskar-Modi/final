import { PipeTransform, Pipe } from '@angular/core';

/**
 * custom pipe that sorts the array according according to the column
 *  passed as argument , it takes care of the order too  
 */
@Pipe({name:"orderBy"})
export class OrderBy implements PipeTransform{
    /**
     * 
     * @param arr array which needs to be sorted
     * @param column column name which is used for sorting
     * @param order order in which array has to be sorted
     */
    transform(arr:any[],column:string,order:boolean){
       //
       // column name is not defined ,no sorting is done
       //
        if(column==undefined){
            return arr;
        }

         let result:any[]; 
        if(order){
          result =this.ascending(arr,column);
          }else{
            result =this.descending(arr,column);
             }
          return result;
    }

    /**
     * 
     * @param arr  array which needs to be sorted
     * @param column column name which is used for sorting
     */
    ascending(arr:any[],column:string){
        arr.sort((a:any,b:any)=>{
            if(a[column]>b[column]){
                return 1;
            }
            return -1;
        });
        return arr;
    }

/**
     * 
     * @param arr  array which needs to be sorted
     * @param column column name which is used for sorting
       */
    descending(arr:any[],column:string){
        arr.sort((a:any,b:any)=>{
            if(a[column]>b[column]){
                return -1;
            }
            return 1;
        });
        return arr;
    }
}