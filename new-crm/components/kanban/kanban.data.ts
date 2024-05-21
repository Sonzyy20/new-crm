import { EnumStatus } from "~/types/deals.types";
import type { IColumn } from "./kanban.type";


export const KANBAN_DATA: IColumn[] =[{
    id: EnumStatus.todo,
    name: 'Incoming',
    items:[]
},
{
    id: EnumStatus["to-be-agreed"],
    name: 'To be Agreed',
    items:[]
},
{
    id: EnumStatus["in-progress"],
    name: 'In progress',
    items:[]
},
{  id: EnumStatus.produced,
    name: 'Produced',
    items:[]
},
{
    id: EnumStatus.done,
    name: 'Done',
    items:[]
}

]