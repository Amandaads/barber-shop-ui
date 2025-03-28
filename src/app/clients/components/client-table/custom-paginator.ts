import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable({
    providedIn: 'root'
})
export class CustomPaginator extends MatPaginatorIntl{
    override itemsPerPageLabel = 'Itens por pagina'; 
    override nextPageLabel = 'Proxima pagina';
    override previousPageLabel = 'Pagina anterior'; 
    override firstPageLabel = 'Primeira pagina';
    override lastPageLabel = 'Ultima pagina';

}