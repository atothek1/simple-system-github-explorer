import { signal } from "@preact/signals-react";

export const searchTerm = signal( "" );
export function getSearchTerm() {
    return searchTerm;
}
export function setSearchTerm( term: string ) {
    searchTerm.value = term;
}

export function hasSearchTerm(){
    return searchTerm.value !== "";
}
