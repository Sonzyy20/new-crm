export interface IMenuItem {
    name:string
    url:string
    icon:string
}

export const MENU_DATA: IMenuItem[] = [{
    icon: 'radix-icons:dashboard',
    name: 'Home',
    url: '/',
},
{
    icon: 'ep:goods',
    name: 'Products',
    url: '/products',
},
{
    icon: 'ph:contactless-payment',
    name: 'Payments',
    url: '/payments',
},
{
    name: 'Orders',
    icon: 'fluent:receipt-28-regular',
    url: '/orders',
},
{
    icon: 'mingcute:group-line',
    name: 'Customers',
    url: '/customers',
},
{
    icon: 'ep:goods',
    name: 'Feedback',
    url: '/feedback',
},
{
    icon: 'radix-icons:gear',
    name: 'Settings',
    url: '/settings',
},
{
    icon: 'radix-icons:question-mark',
    name: 'Help center',
    url: '/help',
},


]