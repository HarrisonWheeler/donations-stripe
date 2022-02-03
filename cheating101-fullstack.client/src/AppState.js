import { reactive } from 'vue'
import { Cause } from "./models/Cause"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  causes: [new Cause({ title: 'Tired of Red Bulls dominance', body: 'Mercedes needs to win - help us sabotage Red Bull by donating a few dollars to our cause', donationAmount: 100, imgUrl: 'https://static.independent.co.uk/2021/06/07/08/GettyImages-1322158873.jpg?width=1200' }), new Cause({ title: 'Patriots', body: 'We need to prove we can win without Tom Brady. Help us continue our legacy of domination with only slightly cheating', donationAmount: 1000, imgUrl: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fmusketfire.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2016%2F04%2F1190750894-850x560.jpeg' }), new Cause({ title: 'Save the Haas F1 team', body: 'We consistently are the worst team in F1. Give us money so we can not be total garbage', donationAmount: 250, imgUrl: 'https://www.saudiarabiangp.com/wp-content/uploads/2021/10/EGUaVbB9TLWcFrC-KCs8-A.jpg' })]

})
