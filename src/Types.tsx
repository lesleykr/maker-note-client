export interface Project{
    projectName: string,
    dateStarted: string,
    dateFinished: string,
    medium: string,
    totalMaterialCost: string,
    forSale: boolean,
    dateSold: string,
    price: string,
    storeSoldAt: string,
    status: string,
    technique: string,
    dimensions: string,
    tags: string,
    sold: boolean,
    productUrl: string,
    notes: string,
    id: number
}

export interface Material{
    materialName: string,
    quantity: string,
    costPerItem: string,
    color: string,
    size: string,
    source: string,
    storageLocation: string,
    description: string,
    notes: string,
    id: number    
}

export interface User {
    email: string,
    firstName: string,
    lastName: string,
    aboutMe: string,
    id: number
}