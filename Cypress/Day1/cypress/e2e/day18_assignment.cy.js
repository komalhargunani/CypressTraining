/// <reference types='cypress' />

describe("API", () => {
let access_token = '';
let userId = '';
    it("API Assignment", ()=>{
        cy.request({
            method:'POST',
            url: 'http://coop.apps.symfonycasts.com/token',
            form: true,
            body:{
                "client_id":"sample2",
                "client_secret":"9b40eac931238a491bbbba698a5c953e",
                "grant_type" : "client_credentials"
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));
            cy.log(response.body.access_token);
            access_token = response.body.access_token;
            cy.request({
                method: "GET",
                url: 'http://coop.apps.symfonycasts.com/api/me',
                headers: {
                    'Authorization' : 'Bearer ' + access_token
                }
            }).then(response=>{
                userId = response.body.id;
                cy.log("user id" +userId);
                // cy.request({
                //     method: 'POST',
                //     url:'http://coop.apps.symfonycasts.com/api/'+userId+'/chickens-feed',
                //     headers:{
                //         'Authorization' : 'Bearer ' +access_token
                //     }

                // }).then(response=>{
                //     cy.log(JSON.stringify(response));
                //     expect(response.status).to.equal(200);
                // })
                cy.request({
                    method: 'POST',
                    url:'http://coop.apps.symfonycasts.com/api/'+userId+'/barn-unlock',
                    headers:{
                        'Authorization' : 'Bearer ' +access_token
                    }

                }).then(response=>{
                    cy.log(JSON.stringify(response));
                    expect(response.status).to.equal(200);
                })
            })
        })
    })
})