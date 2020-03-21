

const initialState = {
    navBar : {
        user_name : 'Abrar'
    },
    parentData : {
        startDate : '12th Jan 2020',
        endDate : '12th Feb 2020'
    },
    productPhotoShootData : [
        {
            title : 'Fab Hotel Prime Ivory II ',
            type : 'Photoshoot' ,
            id : 'ID 1753',
            billingAmount : '5,500',
            category : 'Product Photoshoot',
            product : {name : 'fav Budget' , type : 'Gold'},
            shootDateAndTime : '02/01/2020 , 12:30 PM' ,
            location : 'Kolkata' ,
            status : 'Confirmed',
            ApprovalStatus : null ,
            rating : '6',
            pocContact : {name : 'Satyajit Chatterjee' , phone : '+91 8584968244'},
            address : 'KarunaMoye , saltlake , sector-V , kolkata-20 , West-Bengal'
        },
    ]
};

export default function ( state = initialState , actions) {
    return state
}