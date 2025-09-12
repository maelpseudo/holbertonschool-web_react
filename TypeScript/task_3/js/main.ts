import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

let row: RowElement = {    
    firstName: "Guillaume",
    lastName: "Salva"
}

const newRowID : RowID = CRUD.insertRow(row)

const updateddrow : RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age:23
}

CRUD.updateRow(newRowID,updateddrow)
CRUD.deleteRow(newRowID)
