## @unit-finance/unit-node-sdk@0.1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @unit-finance/unit-node-sdk@0.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.s.unit.sh*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**addAccountOwners**](docs/AccountsApi.md#addaccountowners) | **POST** /accounts/{accountId}/relationships/customers | Add account owners
*AccountsApi* | [**closeAccount**](docs/AccountsApi.md#closeaccount) | **POST** /accounts/{accountId}/close | Close an account
*AccountsApi* | [**createAccount**](docs/AccountsApi.md#createaccount) | **POST** /accounts | Create an account
*AccountsApi* | [**createAccountHold**](docs/AccountsApi.md#createaccounthold) | **POST** /account-holds | Create an account hold
*AccountsApi* | [**freezeAccount**](docs/AccountsApi.md#freezeaccount) | **POST** /accounts/{accountId}/freeze | Freeze an account
*AccountsApi* | [**getAccount**](docs/AccountsApi.md#getaccount) | **GET** /accounts/{accountId} | Get an account by id
*AccountsApi* | [**getAccountBalanceHistory**](docs/AccountsApi.md#getaccountbalancehistory) | **GET** /account-end-of-day | List account end-of-day balances
*AccountsApi* | [**getAccountHoldById**](docs/AccountsApi.md#getaccountholdbyid) | **GET** /account-holds/{id} | Get an account hold by id
*AccountsApi* | [**getAccountLimits**](docs/AccountsApi.md#getaccountlimits) | **GET** /accounts/{accountId}/limits | Get account limits
*AccountsApi* | [**getAvailableDepositProducts**](docs/AccountsApi.md#getavailabledepositproducts) | **GET** /accounts/{accountId}/deposit-products | Get available deposit products
*AccountsApi* | [**listAccountHolds**](docs/AccountsApi.md#listaccountholds) | **GET** /account-holds | List account holds
*AccountsApi* | [**listAccounts**](docs/AccountsApi.md#listaccounts) | **GET** /accounts | List accounts
*AccountsApi* | [**releaseAccountHold**](docs/AccountsApi.md#releaseaccounthold) | **POST** /account-holds/{id}/release | Release an account hold
*AccountsApi* | [**removeAccountOwners**](docs/AccountsApi.md#removeaccountowners) | **DELETE** /accounts/{accountId}/relationships/customers | Remove account owners
*AccountsApi* | [**reopenAccount**](docs/AccountsApi.md#reopenaccount) | **POST** /accounts/{accountId}/reopen | Reopen an account
*AccountsApi* | [**unfreezeAccount**](docs/AccountsApi.md#unfreezeaccount) | **POST** /accounts/{accountId}/unfreeze | Unfreeze an account
*AccountsApi* | [**updateAccount**](docs/AccountsApi.md#updateaccount) | **PATCH** /accounts/{accountId} | Update an account
*ApplicationDocumentsApi* | [**createApplicationDocument**](docs/ApplicationDocumentsApi.md#createapplicationdocument) | **POST** /applications/{applicationId}/documents | Create an application document
*ApplicationDocumentsApi* | [**downloadApplicationDocument**](docs/ApplicationDocumentsApi.md#downloadapplicationdocument) | **GET** /applications/{applicationId}/documents/{documentId}/download | Download an application document
*ApplicationDocumentsApi* | [**downloadApplicationDocumentBackSide**](docs/ApplicationDocumentsApi.md#downloadapplicationdocumentbackside) | **GET** /applications/{applicationId}/documents/{documentId}/download/back | Download an application document back-side
*ApplicationDocumentsApi* | [**listApplicationDocuments**](docs/ApplicationDocumentsApi.md#listapplicationdocuments) | **GET** /applications/{applicationId}/documents | List application documents
*ApplicationDocumentsApi* | [**uploadApplicationDocument**](docs/ApplicationDocumentsApi.md#uploadapplicationdocument) | **PUT** /applications/{applicationId}/documents/{documentId} | Upload an application document
*ApplicationDocumentsApi* | [**uploadApplicationDocumentBackSide**](docs/ApplicationDocumentsApi.md#uploadapplicationdocumentbackside) | **PUT** /applications/{applicationId}/documents/{documentId}/back | Upload an application document back-side
*ApplicationDocumentsApi* | [**verifyApplicationDocument**](docs/ApplicationDocumentsApi.md#verifyapplicationdocument) | **POST** /application/{applicationId}/documents/{documentId}/verify | Verify document
*ApplicationsApi* | [**cancelApplication**](docs/ApplicationsApi.md#cancelapplication) | **POST** /applications/{id}/cancel | Cancel an application
*ApplicationsApi* | [**createApplication**](docs/ApplicationsApi.md#createapplication) | **POST** /applications | Create an application
*ApplicationsApi* | [**getById**](docs/ApplicationsApi.md#getbyid) | **GET** /applications/{id} | Get an application
*ApplicationsApi* | [**list**](docs/ApplicationsApi.md#list) | **GET** /applications | List applications
*ApplicationsApi* | [**updateApplication**](docs/ApplicationsApi.md#updateapplication) | **PATCH** /applications/{id} | Update an application
*ApplicationsApi* | [**updateBusinessBeneficialOwner**](docs/ApplicationsApi.md#updatebusinessbeneficialowner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner
*AuthorizedUsersApi* | [**addAuthorizedUsers**](docs/AuthorizedUsersApi.md#addauthorizedusers) | **POST** /customers/{customerId}/authorized-users | Add authorized users
*AuthorizedUsersApi* | [**getAuthorizedUser**](docs/AuthorizedUsersApi.md#getauthorizeduser) | **GET** /customers/{customerId}/authorized-users/{authorizedUserId} | Get an authorized user
*AuthorizedUsersApi* | [**listAuthorizedUsers**](docs/AuthorizedUsersApi.md#listauthorizedusers) | **GET** /customers/{customerId}/authorized-users | List authorized users
*AuthorizedUsersApi* | [**removeAuthorizedUsers**](docs/AuthorizedUsersApi.md#removeauthorizedusers) | **DELETE** /customers/{customerId}/authorized-users | Remove authorized users
*CardFraudOutreachApi* | [**createPolicy**](docs/CardFraudOutreachApi.md#createpolicy) | **POST** /fraud-outreach-policies | Create a card fraud outreach policy
*CardFraudOutreachApi* | [**getCardFraudCaseById**](docs/CardFraudOutreachApi.md#getcardfraudcasebyid) | **GET** /card-fraud-cases/{id} | Get a card fraud case by id
*CardFraudOutreachApi* | [**getPolicyById**](docs/CardFraudOutreachApi.md#getpolicybyid) | **GET** /fraud-outreach-policies/{policyId} | Get a card fraud outreach policy by id
*CardFraudOutreachApi* | [**listCardFraudCases**](docs/CardFraudOutreachApi.md#listcardfraudcases) | **GET** /card-fraud-cases | List card fraud cases
*CardFraudOutreachApi* | [**markCardFraudCaseAsFraud**](docs/CardFraudOutreachApi.md#markcardfraudcaseasfraud) | **POST** /card-fraud-cases/{id}/fraud | Mark a card fraud case as fraud
*CardFraudOutreachApi* | [**markCardFraudCaseAsNoFraud**](docs/CardFraudOutreachApi.md#markcardfraudcaseasnofraud) | **POST** /card-fraud-cases/{id}/no-fraud | Mark a card fraud case as no fraud
*CardFraudOutreachApi* | [**updatePolicy**](docs/CardFraudOutreachApi.md#updatepolicy) | **PATCH** /fraud-outreach-policies/{policyId} | Update a card fraud outreach policy
*CardHolderAPITokensApi* | [**createCardholderToken**](docs/CardHolderAPITokensApi.md#createcardholdertoken) | **POST** /cards/{cardId}/cardholder/token | Create a cardholder token
*CardHolderAPITokensApi* | [**createCardholderTokenVerification**](docs/CardHolderAPITokensApi.md#createcardholdertokenverification) | **POST** /cards/{cardId}/cardholder/token/verification | Create a cardholder token verification
*CardsApi* | [**closeCard**](docs/CardsApi.md#closecard) | **POST** /cards/{cardId}/close | Close a card
*CardsApi* | [**createCard**](docs/CardsApi.md#createcard) | **POST** /cards | Create a card
*CardsApi* | [**freezeCard**](docs/CardsApi.md#freezecard) | **POST** /cards/{cardId}/freeze | Freeze a card
*CardsApi* | [**getCard**](docs/CardsApi.md#getcard) | **GET** /cards/{cardId} | Get a card
*CardsApi* | [**getCardLimits**](docs/CardsApi.md#getcardlimits) | **GET** /cards/{cardId}/limits | Get card limits
*CardsApi* | [**getCardPinStatus**](docs/CardsApi.md#getcardpinstatus) | **GET** /cards/{cardId}/secure-data/pin/status | Get card PIN status
*CardsApi* | [**listCards**](docs/CardsApi.md#listcards) | **GET** /cards | List cards
*CardsApi* | [**replaceCard**](docs/CardsApi.md#replacecard) | **POST** /cards/{cardId}/replace | Replace a card
*CardsApi* | [**reportCardLost**](docs/CardsApi.md#reportcardlost) | **POST** /cards/{cardId}/report-lost | Report card lost
*CardsApi* | [**reportCardStolen**](docs/CardsApi.md#reportcardstolen) | **POST** /cards/{cardId}/report-stolen | Report card stolen
*CardsApi* | [**unfreezeCard**](docs/CardsApi.md#unfreezecard) | **POST** /cards/{cardId}/unfreeze | Unfreeze a card
*CardsApi* | [**updateCard**](docs/CardsApi.md#updatecard) | **PATCH** /cards/{cardId} | Update a card
*CardsATMLocationsApi* | [**listAtmLocations**](docs/CardsATMLocationsApi.md#listatmlocations) | **GET** /atm-locations | List ATM locations
*CardsAddToMobileWalletApi* | [**getMobileWalletPayload**](docs/CardsAddToMobileWalletApi.md#getmobilewalletpayload) | **POST** /cards/{cardId}/mobile-wallet-payload | Get mobile wallet payload
*CardsAuthorizationRequestsApi* | [**getAuthorizationRequestById**](docs/CardsAuthorizationRequestsApi.md#getauthorizationrequestbyid) | **GET** /authorization-requests/{id} | Get an authorization request by id
*CardsAuthorizationRequestsApi* | [**listAuthorizationRequests**](docs/CardsAuthorizationRequestsApi.md#listauthorizationrequests) | **GET** /authorization-requests | List authorization requests
*CardsAuthorizationsApi* | [**getAuthorization**](docs/CardsAuthorizationsApi.md#getauthorization) | **GET** /authorizations/{id} | Get an authorization
*CardsAuthorizationsApi* | [**listAuthorizations**](docs/CardsAuthorizationsApi.md#listauthorizations) | **GET** /authorizations | List authorizations
*CardsAuthorizationsApi* | [**releaseAuthorization**](docs/CardsAuthorizationsApi.md#releaseauthorization) | **POST** /authorizations/{id}/release | Release an authorization
*CheckDepositsApi* | [**clearCheckDeposit**](docs/CheckDepositsApi.md#clearcheckdeposit) | **POST** /check-deposits/{checkDepositId}/clear | Clear a check deposit
*CheckDepositsApi* | [**confirmCheckDepositDetails**](docs/CheckDepositsApi.md#confirmcheckdepositdetails) | **POST** /check-deposits/{checkDepositId}/confirm | Confirm check deposit details
*CheckDepositsApi* | [**createCheckDeposit**](docs/CheckDepositsApi.md#createcheckdeposit) | **POST** /check-deposits | Create a check deposit
*CheckDepositsApi* | [**createCheckDepositSendLink**](docs/CheckDepositsApi.md#createcheckdepositsendlink) | **POST** /white-label/send-link | Create a check deposit send link
*CheckDepositsApi* | [**getCheckDeposit**](docs/CheckDepositsApi.md#getcheckdeposit) | **GET** /check-deposits/{checkDepositId} | Get a check deposit by id
*CheckDepositsApi* | [**getCheckDepositBackImage**](docs/CheckDepositsApi.md#getcheckdepositbackimage) | **GET** /check-deposits/{checkDepositId}/back | Get a check deposit back image
*CheckDepositsApi* | [**getCheckDepositFrontImage**](docs/CheckDepositsApi.md#getcheckdepositfrontimage) | **GET** /check-deposits/{checkDepositId}/front | Get a check deposit front image
*CheckDepositsApi* | [**listCheckDeposits**](docs/CheckDepositsApi.md#listcheckdeposits) | **GET** /check-deposits | List check deposits
*CheckDepositsApi* | [**updateCheckDeposit**](docs/CheckDepositsApi.md#updatecheckdeposit) | **PATCH** /check-deposits/{checkDepositId} | Update a check deposit
*CheckDepositsApi* | [**uploadCheckDepositBackImage**](docs/CheckDepositsApi.md#uploadcheckdepositbackimage) | **PUT** /check-deposits/{checkDepositId}/back | Upload a check deposit back image
*CheckDepositsApi* | [**uploadCheckDepositFrontImage**](docs/CheckDepositsApi.md#uploadcheckdepositfrontimage) | **PUT** /check-deposits/{checkDepositId}/front | Upload a check deposit front image
*CounterpartiesApi* | [**createCounterparty**](docs/CounterpartiesApi.md#createcounterparty) | **POST** /counterparties | Create a counterparty
*CounterpartiesApi* | [**deleteCounterparty**](docs/CounterpartiesApi.md#deletecounterparty) | **DELETE** /counterparties/{counterpartyId} | Delete a counterparty
*CounterpartiesApi* | [**getCounterparty**](docs/CounterpartiesApi.md#getcounterparty) | **GET** /counterparties/{counterpartyId} | Get a counterparty by id
*CounterpartiesApi* | [**getCounterpartyBalance**](docs/CounterpartiesApi.md#getcounterpartybalance) | **GET** /counterparties/{counterpartyId}/balance | Get a counterparty balance by id
*CounterpartiesApi* | [**listCounterparties**](docs/CounterpartiesApi.md#listcounterparties) | **GET** /counterparties | List counterparties
*CounterpartiesApi* | [**updateCounterparty**](docs/CounterpartiesApi.md#updatecounterparty) | **PATCH** /counterparties/{counterpartyId} | Update a counterparty
*CustomersApi* | [**archiveCustomer**](docs/CustomersApi.md#archivecustomer) | **POST** /customers/{customerId}/archive | Archive a customer
*CustomersApi* | [**createBusinessWalletCustomer**](docs/CustomersApi.md#createbusinesswalletcustomer) | **POST** /customers | Create a business wallet customer
*CustomersApi* | [**getCustomer**](docs/CustomersApi.md#getcustomer) | **GET** /customers/{customerId} | Get a customer
*CustomersApi* | [**listCustomers**](docs/CustomersApi.md#listcustomers) | **GET** /customers | List customers
*CustomersApi* | [**updateBusinessCustomerOfficer**](docs/CustomersApi.md#updatebusinesscustomerofficer) | **PATCH** /customers/{customerId}/officers/{officerId} | Update a business customer officer
*CustomersApi* | [**updateCustomer**](docs/CustomersApi.md#updatecustomer) | **PATCH** /customers/{customerId} | Update a customer
*FeesApi* | [**createFee**](docs/FeesApi.md#createfee) | **POST** /fees | Create a fee
*FeesApi* | [**reverseFee**](docs/FeesApi.md#reversefee) | **POST** /fees/reverse | Reverse a fee
*PaymentsApi* | [**cancelPayment**](docs/PaymentsApi.md#cancelpayment) | **POST** /payments/{paymentId}/cancel | Cancel a payment
*PaymentsApi* | [**clearAchDebitPayment**](docs/PaymentsApi.md#clearachdebitpayment) | **POST** /payments/{paymentId}/clear | Clear an ACH debit payment
*PaymentsApi* | [**createBatchReleases**](docs/PaymentsApi.md#createbatchreleases) | **POST** /batch-releases | Create batch releases
*PaymentsApi* | [**createBulkPayment**](docs/PaymentsApi.md#createbulkpayment) | **POST** /payments/bulk | Create a bulk payment
*PaymentsApi* | [**createPayment**](docs/PaymentsApi.md#createpayment) | **POST** /payments | Create a payment
*PaymentsApi* | [**createRecurringPayment**](docs/PaymentsApi.md#createrecurringpayment) | **POST** /recurring-payments | Create a recurring payment
*PaymentsApi* | [**deleteRecurringPayment**](docs/PaymentsApi.md#deleterecurringpayment) | **DELETE** /recurring-payments/{id} | Delete a recurring payment
*PaymentsApi* | [**disableRecurringPayment**](docs/PaymentsApi.md#disablerecurringpayment) | **POST** /recurring-payments/{id}/disable | Disable a recurring payment
*PaymentsApi* | [**enableRecurringPayment**](docs/PaymentsApi.md#enablerecurringpayment) | **POST** /recurring-payments/{id}/enable | Enable a recurring payment
*PaymentsApi* | [**generateCashDepositBarcode**](docs/PaymentsApi.md#generatecashdepositbarcode) | **POST** /cash-deposits/barcodes | Generate a cash deposit barcode
*PaymentsApi* | [**getCashDepositBarcodeImage**](docs/PaymentsApi.md#getcashdepositbarcodeimage) | **GET** /cash-deposits/barcodes/{barcodeNumber}/image | Get a cash deposit barcode image
*PaymentsApi* | [**getExpectedAchCompletionDate**](docs/PaymentsApi.md#getexpectedachcompletiondate) | **POST** /payments/ach/expected-completion-date | Get expected ACH completion date
*PaymentsApi* | [**getReceivedPayment**](docs/PaymentsApi.md#getreceivedpayment) | **GET** /received-payments/{id} | Get a received payment by id
*PaymentsApi* | [**getRecurringPayment**](docs/PaymentsApi.md#getrecurringpayment) | **GET** /recurring-payments/{id} | Get a recurring payment by id
*PaymentsApi* | [**getWireDrawdown**](docs/PaymentsApi.md#getwiredrawdown) | **GET** /wire-drawdowns/{id} | Get a wire drawdown by id
*PaymentsApi* | [**listReceivedPayments**](docs/PaymentsApi.md#listreceivedpayments) | **GET** /received-payments | List received payments
*PaymentsApi* | [**listRecurringPayments**](docs/PaymentsApi.md#listrecurringpayments) | **GET** /recurring-payments | List recurring payments
*PaymentsApi* | [**listStoreLocations**](docs/PaymentsApi.md#liststorelocations) | **GET** /store-locations | List cash deposit store locations
*PaymentsApi* | [**listWireDrawdowns**](docs/PaymentsApi.md#listwiredrawdowns) | **GET** /wire-drawdowns | List wire drawdowns
*PaymentsApi* | [**sendDrawdownPayment**](docs/PaymentsApi.md#senddrawdownpayment) | **POST** /wire-drawdowns/{id}/send | Send a drawdown payment
*PaymentsApi* | [**updatePayment**](docs/PaymentsApi.md#updatepayment) | **PATCH** /payments/{paymentId} | Update a payment
*PaymentsApi* | [**updateReceivedPayment**](docs/PaymentsApi.md#updatereceivedpayment) | **PATCH** /received-payments/{id} | Update a received payment
*TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#gettransaction) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get a transaction
*TransactionsApi* | [**listTransactions**](docs/TransactionsApi.md#listtransactions) | **GET** /transactions | List transactions
*TransactionsApi* | [**updateTransaction**](docs/TransactionsApi.md#updatetransaction) | **PATCH** /transactions/{transactionId} | Update a transaction
*TransactionsApi* | [**updateTransactionTags**](docs/TransactionsApi.md#updatetransactiontags) | **PATCH** /accounts/{accountId}/transactions/{transactionId} | Update transaction tags


### Documentation For Models

 - [ACHCounterparty](docs/ACHCounterparty.md)
 - [ACHCounterpartyAttributes](docs/ACHCounterpartyAttributes.md)
 - [ACHPayment](docs/ACHPayment.md)
 - [ACHPaymentAttributes](docs/ACHPaymentAttributes.md)
 - [ACHPaymentRelationships](docs/ACHPaymentRelationships.md)
 - [ACHReceivedPayment](docs/ACHReceivedPayment.md)
 - [ACHReceivedPaymentAttributes](docs/ACHReceivedPaymentAttributes.md)
 - [ACHReceivedPaymentRelationships](docs/ACHReceivedPaymentRelationships.md)
 - [ATMLocation](docs/ATMLocation.md)
 - [ATMLocationAttributes](docs/ATMLocationAttributes.md)
 - [ATMTransaction](docs/ATMTransaction.md)
 - [ATMTransactionAttributes](docs/ATMTransactionAttributes.md)
 - [ATMTransactionRelationships](docs/ATMTransactionRelationships.md)
 - [AccountEndOfDay](docs/AccountEndOfDay.md)
 - [AccountEndOfDayAttributes](docs/AccountEndOfDayAttributes.md)
 - [AccountEndOfDayRelationships](docs/AccountEndOfDayRelationships.md)
 - [AccountHold](docs/AccountHold.md)
 - [AccountHoldAttributes](docs/AccountHoldAttributes.md)
 - [AccountLowBalanceClosureTransaction](docs/AccountLowBalanceClosureTransaction.md)
 - [AccountLowBalanceClosureTransactionAttributes](docs/AccountLowBalanceClosureTransactionAttributes.md)
 - [AccountLowBalanceClosureTransactionRelationships](docs/AccountLowBalanceClosureTransactionRelationships.md)
 - [AddAccountOwners200Response](docs/AddAccountOwners200Response.md)
 - [AddAccountOwnersRequest](docs/AddAccountOwnersRequest.md)
 - [AddAuthorizedUsersData](docs/AddAuthorizedUsersData.md)
 - [AddAuthorizedUsersDataAttributes](docs/AddAuthorizedUsersDataAttributes.md)
 - [AddAuthorizedUsersRequest](docs/AddAuthorizedUsersRequest.md)
 - [AddressType](docs/AddressType.md)
 - [AdjustmentTransaction](docs/AdjustmentTransaction.md)
 - [AdjustmentTransactionAttributes](docs/AdjustmentTransactionAttributes.md)
 - [AnnualIncomeType](docs/AnnualIncomeType.md)
 - [AnnualRevenueType](docs/AnnualRevenueType.md)
 - [ApplicationDocument](docs/ApplicationDocument.md)
 - [ApplicationDocumentAttributes](docs/ApplicationDocumentAttributes.md)
 - [ArchiveCustomerData](docs/ArchiveCustomerData.md)
 - [ArchiveCustomerDataAttributes](docs/ArchiveCustomerDataAttributes.md)
 - [ArchiveCustomerRequest](docs/ArchiveCustomerRequest.md)
 - [AtmAuthorizationRequest](docs/AtmAuthorizationRequest.md)
 - [AtmAuthorizationRequestAttributes](docs/AtmAuthorizationRequestAttributes.md)
 - [AtmAuthorizationRequestRelationships](docs/AtmAuthorizationRequestRelationships.md)
 - [Authorization](docs/Authorization.md)
 - [AuthorizationAttributes](docs/AuthorizationAttributes.md)
 - [AuthorizationCardFraudCase](docs/AuthorizationCardFraudCase.md)
 - [AuthorizationCardFraudCaseAttributes](docs/AuthorizationCardFraudCaseAttributes.md)
 - [AuthorizationCardFraudCaseRelationships](docs/AuthorizationCardFraudCaseRelationships.md)
 - [AuthorizationRelationships](docs/AuthorizationRelationships.md)
 - [AuthorizedUserType](docs/AuthorizedUserType.md)
 - [BatchRelease](docs/BatchRelease.md)
 - [BatchReleaseAttributes](docs/BatchReleaseAttributes.md)
 - [BatchReleaseRelationships](docs/BatchReleaseRelationships.md)
 - [BeneficialOwner](docs/BeneficialOwner.md)
 - [BeneficialOwnerAttributes](docs/BeneficialOwnerAttributes.md)
 - [BeneficialOwnerRequestType](docs/BeneficialOwnerRequestType.md)
 - [BeneficialOwnerType](docs/BeneficialOwnerType.md)
 - [BookPayment](docs/BookPayment.md)
 - [BookPaymentAttributes](docs/BookPaymentAttributes.md)
 - [BookPaymentRelationships](docs/BookPaymentRelationships.md)
 - [BookTransaction](docs/BookTransaction.md)
 - [BookTransactionAttributes](docs/BookTransactionAttributes.md)
 - [BookTransactionRelationships](docs/BookTransactionRelationships.md)
 - [BusinessAnnualRevenueType](docs/BusinessAnnualRevenueType.md)
 - [BusinessApplication](docs/BusinessApplication.md)
 - [BusinessApplicationAttributes](docs/BusinessApplicationAttributes.md)
 - [BusinessApplicationRelationships](docs/BusinessApplicationRelationships.md)
 - [BusinessContactType](docs/BusinessContactType.md)
 - [BusinessCreditCard](docs/BusinessCreditCard.md)
 - [BusinessCustomer](docs/BusinessCustomer.md)
 - [BusinessCustomerAttributes](docs/BusinessCustomerAttributes.md)
 - [BusinessCustomerRelationships](docs/BusinessCustomerRelationships.md)
 - [BusinessDebitCard](docs/BusinessDebitCard.md)
 - [BusinessDebitCardAttributes](docs/BusinessDebitCardAttributes.md)
 - [BusinessNumberOfEmployeesType](docs/BusinessNumberOfEmployeesType.md)
 - [BusinessVerticalType](docs/BusinessVerticalType.md)
 - [BusinessVirtualCreditCard](docs/BusinessVirtualCreditCard.md)
 - [BusinessVirtualDebitCard](docs/BusinessVirtualDebitCard.md)
 - [BusinessVirtualDebitCardAttributes](docs/BusinessVirtualDebitCardAttributes.md)
 - [BusinessWalletCustomer](docs/BusinessWalletCustomer.md)
 - [BusinessWalletCustomerAttributes](docs/BusinessWalletCustomerAttributes.md)
 - [BusinessWalletCustomerRelationships](docs/BusinessWalletCustomerRelationships.md)
 - [CancelApplication201Response](docs/CancelApplication201Response.md)
 - [CancelApplicationData](docs/CancelApplicationData.md)
 - [CancelApplicationDataAttributes](docs/CancelApplicationDataAttributes.md)
 - [CancelApplicationRequest](docs/CancelApplicationRequest.md)
 - [CancelPayment200Response](docs/CancelPayment200Response.md)
 - [CancelPayment200ResponseData](docs/CancelPayment200ResponseData.md)
 - [CardFraudOutreachPolicy](docs/CardFraudOutreachPolicy.md)
 - [CardFraudOutreachPolicyAttributes](docs/CardFraudOutreachPolicyAttributes.md)
 - [CardFraudOutreachPolicyRelationships](docs/CardFraudOutreachPolicyRelationships.md)
 - [CardReversalTransaction](docs/CardReversalTransaction.md)
 - [CardReversalTransactionAttributes](docs/CardReversalTransactionAttributes.md)
 - [CardReversalTransactionRelationships](docs/CardReversalTransactionRelationships.md)
 - [CardTransaction](docs/CardTransaction.md)
 - [CardTransactionAttributes](docs/CardTransactionAttributes.md)
 - [CardTransactionAttributesCardVerificationData](docs/CardTransactionAttributesCardVerificationData.md)
 - [CardTransactionAttributesMerchant](docs/CardTransactionAttributesMerchant.md)
 - [CardTransactionAuthorizationRequest](docs/CardTransactionAuthorizationRequest.md)
 - [CardTransactionAuthorizationRequestAttributes](docs/CardTransactionAuthorizationRequestAttributes.md)
 - [CardTransactionRelationships](docs/CardTransactionRelationships.md)
 - [CashDepositBarcode](docs/CashDepositBarcode.md)
 - [CashDepositBarcodeAttributes](docs/CashDepositBarcodeAttributes.md)
 - [CashDepositBarcodeRelationships](docs/CashDepositBarcodeRelationships.md)
 - [CashDepositTransaction](docs/CashDepositTransaction.md)
 - [CashDepositTransactionAttributes](docs/CashDepositTransactionAttributes.md)
 - [CashFlowType](docs/CashFlowType.md)
 - [ChargebackTransaction](docs/ChargebackTransaction.md)
 - [ChargebackTransactionAttributes](docs/ChargebackTransactionAttributes.md)
 - [ChargebackTransactionRelationships](docs/ChargebackTransactionRelationships.md)
 - [CheckCounterpartyType](docs/CheckCounterpartyType.md)
 - [CheckDeposit](docs/CheckDeposit.md)
 - [CheckDepositAttributes](docs/CheckDepositAttributes.md)
 - [CheckDepositRelationships](docs/CheckDepositRelationships.md)
 - [CheckDepositTransaction](docs/CheckDepositTransaction.md)
 - [CheckDepositTransactionAttributes](docs/CheckDepositTransactionAttributes.md)
 - [CheckDepositTransactionRelationships](docs/CheckDepositTransactionRelationships.md)
 - [CheckPaymentTransaction](docs/CheckPaymentTransaction.md)
 - [CheckPaymentTransactionRelationships](docs/CheckPaymentTransactionRelationships.md)
 - [ClearAchDebitPayment200Response](docs/ClearAchDebitPayment200Response.md)
 - [CloseAccountRequest](docs/CloseAccountRequest.md)
 - [CloseCard200Response](docs/CloseCard200Response.md)
 - [CloseCreditAccountData](docs/CloseCreditAccountData.md)
 - [CloseCreditAccountDataAttributes](docs/CloseCreditAccountDataAttributes.md)
 - [CloseCreditAccountRequest](docs/CloseCreditAccountRequest.md)
 - [CloseDepositAccountData](docs/CloseDepositAccountData.md)
 - [CloseDepositAccountDataAttributes](docs/CloseDepositAccountDataAttributes.md)
 - [CloseDepositAccountRequest](docs/CloseDepositAccountRequest.md)
 - [CloseWalletData](docs/CloseWalletData.md)
 - [CloseWalletDataAttributes](docs/CloseWalletDataAttributes.md)
 - [CloseWalletRequest](docs/CloseWalletRequest.md)
 - [CoordinatesType](docs/CoordinatesType.md)
 - [CounterpartyBalance](docs/CounterpartyBalance.md)
 - [CounterpartyBalanceAttributes](docs/CounterpartyBalanceAttributes.md)
 - [CounterpartyBalanceRelationships](docs/CounterpartyBalanceRelationships.md)
 - [CounterpartyType](docs/CounterpartyType.md)
 - [CreateABookPaymentData](docs/CreateABookPaymentData.md)
 - [CreateABookPaymentDataAttributes](docs/CreateABookPaymentDataAttributes.md)
 - [CreateABookPaymentDataRelationships](docs/CreateABookPaymentDataRelationships.md)
 - [CreateABookPaymentRequest](docs/CreateABookPaymentRequest.md)
 - [CreateACHPaymentData](docs/CreateACHPaymentData.md)
 - [CreateACHPaymentDataAttributes](docs/CreateACHPaymentDataAttributes.md)
 - [CreateACHPaymentExistingCounterpartyData](docs/CreateACHPaymentExistingCounterpartyData.md)
 - [CreateACHPaymentExistingCounterpartyDataAttributes](docs/CreateACHPaymentExistingCounterpartyDataAttributes.md)
 - [CreateACHPaymentExistingCounterpartyDataRelationships](docs/CreateACHPaymentExistingCounterpartyDataRelationships.md)
 - [CreateACHPaymentExistingCounterpartyRequest](docs/CreateACHPaymentExistingCounterpartyRequest.md)
 - [CreateACHPaymentPlaidTokenData](docs/CreateACHPaymentPlaidTokenData.md)
 - [CreateACHPaymentPlaidTokenDataAttributes](docs/CreateACHPaymentPlaidTokenDataAttributes.md)
 - [CreateACHPaymentPlaidTokenRequest](docs/CreateACHPaymentPlaidTokenRequest.md)
 - [CreateACHPaymentRequest](docs/CreateACHPaymentRequest.md)
 - [CreateAWirePaymentData](docs/CreateAWirePaymentData.md)
 - [CreateAWirePaymentDataAttributes](docs/CreateAWirePaymentDataAttributes.md)
 - [CreateAWirePaymentRequest](docs/CreateAWirePaymentRequest.md)
 - [CreateAccount201Response](docs/CreateAccount201Response.md)
 - [CreateAccountHold201Response](docs/CreateAccountHold201Response.md)
 - [CreateAccountHoldData](docs/CreateAccountHoldData.md)
 - [CreateAccountHoldDataAttributes](docs/CreateAccountHoldDataAttributes.md)
 - [CreateAccountHoldRequest](docs/CreateAccountHoldRequest.md)
 - [CreateAccountRequest](docs/CreateAccountRequest.md)
 - [CreateApplication201Response](docs/CreateApplication201Response.md)
 - [CreateApplication201ResponseIncludedInner](docs/CreateApplication201ResponseIncludedInner.md)
 - [CreateApplicationDocument200Response](docs/CreateApplicationDocument200Response.md)
 - [CreateApplicationRequest](docs/CreateApplicationRequest.md)
 - [CreateBatchReleases201Response](docs/CreateBatchReleases201Response.md)
 - [CreateBatchReleasesData](docs/CreateBatchReleasesData.md)
 - [CreateBatchReleasesDataAttributes](docs/CreateBatchReleasesDataAttributes.md)
 - [CreateBatchReleasesRequest](docs/CreateBatchReleasesRequest.md)
 - [CreateBulkPayment201Response](docs/CreateBulkPayment201Response.md)
 - [CreateBulkPayment201ResponseData](docs/CreateBulkPayment201ResponseData.md)
 - [CreateBulkPayment201ResponseDataAttributes](docs/CreateBulkPayment201ResponseDataAttributes.md)
 - [CreateBulkPaymentRequest](docs/CreateBulkPaymentRequest.md)
 - [CreateBulkPaymentRequestDataInner](docs/CreateBulkPaymentRequestDataInner.md)
 - [CreateBusinessApplicationData](docs/CreateBusinessApplicationData.md)
 - [CreateBusinessApplicationDataAttributes](docs/CreateBusinessApplicationDataAttributes.md)
 - [CreateBusinessApplicationRequest](docs/CreateBusinessApplicationRequest.md)
 - [CreateBusinessCreditCardData](docs/CreateBusinessCreditCardData.md)
 - [CreateBusinessCreditCardDataAttributes](docs/CreateBusinessCreditCardDataAttributes.md)
 - [CreateBusinessCreditCardRequest](docs/CreateBusinessCreditCardRequest.md)
 - [CreateBusinessDebitCardData](docs/CreateBusinessDebitCardData.md)
 - [CreateBusinessDebitCardRequest](docs/CreateBusinessDebitCardRequest.md)
 - [CreateBusinessVirtualCreditCardData](docs/CreateBusinessVirtualCreditCardData.md)
 - [CreateBusinessVirtualCreditCardDataAttributes](docs/CreateBusinessVirtualCreditCardDataAttributes.md)
 - [CreateBusinessVirtualCreditCardRequest](docs/CreateBusinessVirtualCreditCardRequest.md)
 - [CreateBusinessVirtualDebitCardData](docs/CreateBusinessVirtualDebitCardData.md)
 - [CreateBusinessVirtualDebitCardDataAttributes](docs/CreateBusinessVirtualDebitCardDataAttributes.md)
 - [CreateBusinessVirtualDebitCardRequest](docs/CreateBusinessVirtualDebitCardRequest.md)
 - [CreateBusinessWalletCustomer201Response](docs/CreateBusinessWalletCustomer201Response.md)
 - [CreateBusinessWalletCustomerData](docs/CreateBusinessWalletCustomerData.md)
 - [CreateBusinessWalletCustomerDataAttributes](docs/CreateBusinessWalletCustomerDataAttributes.md)
 - [CreateBusinessWalletCustomerRequest](docs/CreateBusinessWalletCustomerRequest.md)
 - [CreateCard201Response](docs/CreateCard201Response.md)
 - [CreateCard201ResponseData](docs/CreateCard201ResponseData.md)
 - [CreateCardRequest](docs/CreateCardRequest.md)
 - [CreateCardholderToken201Response](docs/CreateCardholderToken201Response.md)
 - [CreateCardholderToken201ResponseData](docs/CreateCardholderToken201ResponseData.md)
 - [CreateCardholderToken201ResponseDataAttributes](docs/CreateCardholderToken201ResponseDataAttributes.md)
 - [CreateCardholderTokenData](docs/CreateCardholderTokenData.md)
 - [CreateCardholderTokenDataAttributes](docs/CreateCardholderTokenDataAttributes.md)
 - [CreateCardholderTokenRequest](docs/CreateCardholderTokenRequest.md)
 - [CreateCardholderTokenVerification201Response](docs/CreateCardholderTokenVerification201Response.md)
 - [CreateCardholderTokenVerification201ResponseData](docs/CreateCardholderTokenVerification201ResponseData.md)
 - [CreateCardholderTokenVerification201ResponseDataAttributes](docs/CreateCardholderTokenVerification201ResponseDataAttributes.md)
 - [CreateCardholderTokenVerificationData](docs/CreateCardholderTokenVerificationData.md)
 - [CreateCardholderTokenVerificationDataAttributes](docs/CreateCardholderTokenVerificationDataAttributes.md)
 - [CreateCardholderTokenVerificationRequest](docs/CreateCardholderTokenVerificationRequest.md)
 - [CreateCheckDeposit201Response](docs/CreateCheckDeposit201Response.md)
 - [CreateCheckDepositData](docs/CreateCheckDepositData.md)
 - [CreateCheckDepositDataAttributes](docs/CreateCheckDepositDataAttributes.md)
 - [CreateCheckDepositRequest](docs/CreateCheckDepositRequest.md)
 - [CreateCheckDepositSendLink201Response](docs/CreateCheckDepositSendLink201Response.md)
 - [CreateCheckDepositSendLink201ResponseData](docs/CreateCheckDepositSendLink201ResponseData.md)
 - [CreateCheckDepositSendLinkData](docs/CreateCheckDepositSendLinkData.md)
 - [CreateCheckDepositSendLinkDataAttributes](docs/CreateCheckDepositSendLinkDataAttributes.md)
 - [CreateCheckDepositSendLinkDataRelationships](docs/CreateCheckDepositSendLinkDataRelationships.md)
 - [CreateCheckDepositSendLinkRequest](docs/CreateCheckDepositSendLinkRequest.md)
 - [CreateCounterparty201Response](docs/CreateCounterparty201Response.md)
 - [CreateCounterpartyBody](docs/CreateCounterpartyBody.md)
 - [CreateCounterpartyData](docs/CreateCounterpartyData.md)
 - [CreateCounterpartyDataAttributes](docs/CreateCounterpartyDataAttributes.md)
 - [CreateCounterpartyRequest](docs/CreateCounterpartyRequest.md)
 - [CreateCounterpartyWithPlaidTokenData](docs/CreateCounterpartyWithPlaidTokenData.md)
 - [CreateCounterpartyWithPlaidTokenDataAttributes](docs/CreateCounterpartyWithPlaidTokenDataAttributes.md)
 - [CreateCounterpartyWithPlaidTokenRequest](docs/CreateCounterpartyWithPlaidTokenRequest.md)
 - [CreateCreditAccountData](docs/CreateCreditAccountData.md)
 - [CreateCreditAccountDataAttributes](docs/CreateCreditAccountDataAttributes.md)
 - [CreateCreditAccountRequest](docs/CreateCreditAccountRequest.md)
 - [CreateDepositAccountData](docs/CreateDepositAccountData.md)
 - [CreateDepositAccountDataAttributes](docs/CreateDepositAccountDataAttributes.md)
 - [CreateDepositAccountDataRelationships](docs/CreateDepositAccountDataRelationships.md)
 - [CreateDepositAccountRequest](docs/CreateDepositAccountRequest.md)
 - [CreateFee201Response](docs/CreateFee201Response.md)
 - [CreateFeeData](docs/CreateFeeData.md)
 - [CreateFeeDataAttributes](docs/CreateFeeDataAttributes.md)
 - [CreateFeeDataRelationships](docs/CreateFeeDataRelationships.md)
 - [CreateFeeRequest](docs/CreateFeeRequest.md)
 - [CreateIndividualApplicationData](docs/CreateIndividualApplicationData.md)
 - [CreateIndividualApplicationDataAttributes](docs/CreateIndividualApplicationDataAttributes.md)
 - [CreateIndividualApplicationRequest](docs/CreateIndividualApplicationRequest.md)
 - [CreateIndividualDebitCardData](docs/CreateIndividualDebitCardData.md)
 - [CreateIndividualDebitCardDataAttributes](docs/CreateIndividualDebitCardDataAttributes.md)
 - [CreateIndividualDebitCardRequest](docs/CreateIndividualDebitCardRequest.md)
 - [CreateIndividualVirtualDebitCardData](docs/CreateIndividualVirtualDebitCardData.md)
 - [CreateIndividualVirtualDebitCardDataAttributes](docs/CreateIndividualVirtualDebitCardDataAttributes.md)
 - [CreateIndividualVirtualDebitCardRequest](docs/CreateIndividualVirtualDebitCardRequest.md)
 - [CreatePayment201Response](docs/CreatePayment201Response.md)
 - [CreatePayment201ResponseData](docs/CreatePayment201ResponseData.md)
 - [CreatePaymentRequest](docs/CreatePaymentRequest.md)
 - [CreatePolicy201Response](docs/CreatePolicy201Response.md)
 - [CreatePolicyData](docs/CreatePolicyData.md)
 - [CreatePolicyDataAttributes](docs/CreatePolicyDataAttributes.md)
 - [CreatePolicyDataRelationships](docs/CreatePolicyDataRelationships.md)
 - [CreatePolicyRequest](docs/CreatePolicyRequest.md)
 - [CreateRecurringCreditACHPaymentData](docs/CreateRecurringCreditACHPaymentData.md)
 - [CreateRecurringCreditACHPaymentDataAttributes](docs/CreateRecurringCreditACHPaymentDataAttributes.md)
 - [CreateRecurringCreditACHPaymentRequest](docs/CreateRecurringCreditACHPaymentRequest.md)
 - [CreateRecurringCreditBookPaymentData](docs/CreateRecurringCreditBookPaymentData.md)
 - [CreateRecurringCreditBookPaymentDataAttributes](docs/CreateRecurringCreditBookPaymentDataAttributes.md)
 - [CreateRecurringCreditBookPaymentRequest](docs/CreateRecurringCreditBookPaymentRequest.md)
 - [CreateRecurringDebitACHPaymentData](docs/CreateRecurringDebitACHPaymentData.md)
 - [CreateRecurringDebitACHPaymentDataAttributes](docs/CreateRecurringDebitACHPaymentDataAttributes.md)
 - [CreateRecurringDebitACHPaymentRequest](docs/CreateRecurringDebitACHPaymentRequest.md)
 - [CreateRecurringPayment201Response](docs/CreateRecurringPayment201Response.md)
 - [CreateRecurringPaymentRequest](docs/CreateRecurringPaymentRequest.md)
 - [CreateScheduleType](docs/CreateScheduleType.md)
 - [CreateSoleProprietorApplicationData](docs/CreateSoleProprietorApplicationData.md)
 - [CreateSoleProprietorApplicationDataAttributes](docs/CreateSoleProprietorApplicationDataAttributes.md)
 - [CreateSoleProprietorApplicationRequest](docs/CreateSoleProprietorApplicationRequest.md)
 - [CreateWalletData](docs/CreateWalletData.md)
 - [CreateWalletDataAttributes](docs/CreateWalletDataAttributes.md)
 - [CreateWalletRequest](docs/CreateWalletRequest.md)
 - [CreditAccount](docs/CreditAccount.md)
 - [CreditAccountAttributes](docs/CreditAccountAttributes.md)
 - [CreditAccountRelationships](docs/CreditAccountRelationships.md)
 - [CurrencyConversionType](docs/CurrencyConversionType.md)
 - [DepositAccount](docs/DepositAccount.md)
 - [DepositAccountAttributes](docs/DepositAccountAttributes.md)
 - [DepositAccountRelationships](docs/DepositAccountRelationships.md)
 - [DeviceFingerprintType](docs/DeviceFingerprintType.md)
 - [DishonoredACHTransaction](docs/DishonoredACHTransaction.md)
 - [DishonoredACHTransactionAttributes](docs/DishonoredACHTransactionAttributes.md)
 - [DisputeTransaction](docs/DisputeTransaction.md)
 - [DisputeTransactionAttributes](docs/DisputeTransactionAttributes.md)
 - [DisputeTransactionRelationships](docs/DisputeTransactionRelationships.md)
 - [ErrorDocument](docs/ErrorDocument.md)
 - [ErrorDocumentErrorsInner](docs/ErrorDocumentErrorsInner.md)
 - [ErrorDocumentErrorsInnerSource](docs/ErrorDocumentErrorsInnerSource.md)
 - [Fee](docs/Fee.md)
 - [FeeAttributes](docs/FeeAttributes.md)
 - [FeeRelationships](docs/FeeRelationships.md)
 - [FeeReversal](docs/FeeReversal.md)
 - [FeeReversalAttributes](docs/FeeReversalAttributes.md)
 - [FeeReversalRelationships](docs/FeeReversalRelationships.md)
 - [FeeReversalTransaction](docs/FeeReversalTransaction.md)
 - [FeeReversalTransactionRelationships](docs/FeeReversalTransactionRelationships.md)
 - [FeeTransaction](docs/FeeTransaction.md)
 - [FraudCaseCardActivityType](docs/FraudCaseCardActivityType.md)
 - [FreezeAccountRequest](docs/FreezeAccountRequest.md)
 - [FreezeCardData](docs/FreezeCardData.md)
 - [FreezeCardDataAttributes](docs/FreezeCardDataAttributes.md)
 - [FreezeCardRequest](docs/FreezeCardRequest.md)
 - [FreezeCreditAccountData](docs/FreezeCreditAccountData.md)
 - [FreezeCreditAccountRequest](docs/FreezeCreditAccountRequest.md)
 - [FreezeDepositAccountData](docs/FreezeDepositAccountData.md)
 - [FreezeDepositAccountDataAttributes](docs/FreezeDepositAccountDataAttributes.md)
 - [FreezeDepositAccountRequest](docs/FreezeDepositAccountRequest.md)
 - [FreezeWalletData](docs/FreezeWalletData.md)
 - [FreezeWalletDataAttributes](docs/FreezeWalletDataAttributes.md)
 - [FreezeWalletRequest](docs/FreezeWalletRequest.md)
 - [FullNameType](docs/FullNameType.md)
 - [GenerateBarcodeData](docs/GenerateBarcodeData.md)
 - [GenerateBarcodeDataAttributes](docs/GenerateBarcodeDataAttributes.md)
 - [GenerateBarcodeDataRelationships](docs/GenerateBarcodeDataRelationships.md)
 - [GenerateCashDepositBarcode200Response](docs/GenerateCashDepositBarcode200Response.md)
 - [GenerateCashDepositBarcodeRequest](docs/GenerateCashDepositBarcodeRequest.md)
 - [GetAccountBalanceHistory200Response](docs/GetAccountBalanceHistory200Response.md)
 - [GetAccountLimits200Response](docs/GetAccountLimits200Response.md)
 - [GetAccountLimits200ResponseData](docs/GetAccountLimits200ResponseData.md)
 - [GetAuthorization200Response](docs/GetAuthorization200Response.md)
 - [GetAuthorizationRequestById200Response](docs/GetAuthorizationRequestById200Response.md)
 - [GetAuthorizedUser200Response](docs/GetAuthorizedUser200Response.md)
 - [GetAvailableDepositProducts200Response](docs/GetAvailableDepositProducts200Response.md)
 - [GetAvailableDepositProducts200ResponseDataInner](docs/GetAvailableDepositProducts200ResponseDataInner.md)
 - [GetAvailableDepositProducts200ResponseDataInnerAttributes](docs/GetAvailableDepositProducts200ResponseDataInnerAttributes.md)
 - [GetCard200Response](docs/GetCard200Response.md)
 - [GetCardFraudCaseById200Response](docs/GetCardFraudCaseById200Response.md)
 - [GetCardPinStatus200Response](docs/GetCardPinStatus200Response.md)
 - [GetCheckDeposit200Response](docs/GetCheckDeposit200Response.md)
 - [GetCounterpartyBalance200Response](docs/GetCounterpartyBalance200Response.md)
 - [GetCustomer200Response](docs/GetCustomer200Response.md)
 - [GetExpectedACHCompletionDateData](docs/GetExpectedACHCompletionDateData.md)
 - [GetExpectedACHCompletionDateDataAttributes](docs/GetExpectedACHCompletionDateDataAttributes.md)
 - [GetExpectedAchCompletionDate200Response](docs/GetExpectedAchCompletionDate200Response.md)
 - [GetExpectedAchCompletionDate200ResponseData](docs/GetExpectedAchCompletionDate200ResponseData.md)
 - [GetExpectedAchCompletionDateRequest](docs/GetExpectedAchCompletionDateRequest.md)
 - [GetMobileWalletPayload200Response](docs/GetMobileWalletPayload200Response.md)
 - [GetMobileWalletPayloadData](docs/GetMobileWalletPayloadData.md)
 - [GetMobileWalletPayloadDataAttributes](docs/GetMobileWalletPayloadDataAttributes.md)
 - [GetMobileWalletPayloadRequest](docs/GetMobileWalletPayloadRequest.md)
 - [GetReceivedPayment200Response](docs/GetReceivedPayment200Response.md)
 - [GetTransaction200Response](docs/GetTransaction200Response.md)
 - [GetWireDrawdown200Response](docs/GetWireDrawdown200Response.md)
 - [HealthcareAmountsType](docs/HealthcareAmountsType.md)
 - [IndividualApplication](docs/IndividualApplication.md)
 - [IndividualApplicationAttributes](docs/IndividualApplicationAttributes.md)
 - [IndividualApplicationRelationships](docs/IndividualApplicationRelationships.md)
 - [IndividualCustomer](docs/IndividualCustomer.md)
 - [IndividualCustomerRelationships](docs/IndividualCustomerRelationships.md)
 - [IndividualDebitCard](docs/IndividualDebitCard.md)
 - [IndividualDebitCardAttributes](docs/IndividualDebitCardAttributes.md)
 - [IndividualVirtualDebitCard](docs/IndividualVirtualDebitCard.md)
 - [IndividualVirtualDebitCardAttributes](docs/IndividualVirtualDebitCardAttributes.md)
 - [IndustryType](docs/IndustryType.md)
 - [InterestShareTransaction](docs/InterestShareTransaction.md)
 - [InterestShareTransactionRelationships](docs/InterestShareTransactionRelationships.md)
 - [InterestTransaction](docs/InterestTransaction.md)
 - [List200Response](docs/List200Response.md)
 - [List200ResponseDataInner](docs/List200ResponseDataInner.md)
 - [ListAccountHolds200Response](docs/ListAccountHolds200Response.md)
 - [ListAccounts200Response](docs/ListAccounts200Response.md)
 - [ListAccounts200ResponseDataInner](docs/ListAccounts200ResponseDataInner.md)
 - [ListApplicationDocuments200Response](docs/ListApplicationDocuments200Response.md)
 - [ListAtmLocations200Response](docs/ListAtmLocations200Response.md)
 - [ListAuthorizationRequests200Response](docs/ListAuthorizationRequests200Response.md)
 - [ListAuthorizationRequests200ResponseDataInner](docs/ListAuthorizationRequests200ResponseDataInner.md)
 - [ListAuthorizations200Response](docs/ListAuthorizations200Response.md)
 - [ListAuthorizedUsers200Response](docs/ListAuthorizedUsers200Response.md)
 - [ListCardFraudCases200Response](docs/ListCardFraudCases200Response.md)
 - [ListCardFraudCases200ResponseDataInner](docs/ListCardFraudCases200ResponseDataInner.md)
 - [ListCards200Response](docs/ListCards200Response.md)
 - [ListCards200ResponseDataInner](docs/ListCards200ResponseDataInner.md)
 - [ListCheckDeposits200Response](docs/ListCheckDeposits200Response.md)
 - [ListCounterparties200Response](docs/ListCounterparties200Response.md)
 - [ListCustomers200Response](docs/ListCustomers200Response.md)
 - [ListCustomers200ResponseDataInner](docs/ListCustomers200ResponseDataInner.md)
 - [ListReceivedPayments200Response](docs/ListReceivedPayments200Response.md)
 - [ListReceivedPayments200ResponseDataInner](docs/ListReceivedPayments200ResponseDataInner.md)
 - [ListRecurringPayments200Response](docs/ListRecurringPayments200Response.md)
 - [ListRecurringPayments200ResponseDataInner](docs/ListRecurringPayments200ResponseDataInner.md)
 - [ListStoreLocations200Response](docs/ListStoreLocations200Response.md)
 - [ListTransactions200Response](docs/ListTransactions200Response.md)
 - [ListTransactions200ResponseIncludedInner](docs/ListTransactions200ResponseIncludedInner.md)
 - [ListWireDrawdowns200Response](docs/ListWireDrawdowns200Response.md)
 - [MarkCardFraudCaseAsFraudData](docs/MarkCardFraudCaseAsFraudData.md)
 - [MarkCardFraudCaseAsFraudDataAttributes](docs/MarkCardFraudCaseAsFraudDataAttributes.md)
 - [MarkCardFraudCaseAsFraudRequest](docs/MarkCardFraudCaseAsFraudRequest.md)
 - [Meta](docs/Meta.md)
 - [MetaPagination](docs/MetaPagination.md)
 - [MobileWalletPayload](docs/MobileWalletPayload.md)
 - [MobileWalletPayloadAttributes](docs/MobileWalletPayloadAttributes.md)
 - [NegativeBalanceCoverageTransaction](docs/NegativeBalanceCoverageTransaction.md)
 - [NumberOfEmployeesType](docs/NumberOfEmployeesType.md)
 - [OccupationType](docs/OccupationType.md)
 - [Officer](docs/Officer.md)
 - [OfficerAttributes](docs/OfficerAttributes.md)
 - [OfficerRelationships](docs/OfficerRelationships.md)
 - [OfficerRequestType](docs/OfficerRequestType.md)
 - [OfficerType](docs/OfficerType.md)
 - [OriginatedACHTransaction](docs/OriginatedACHTransaction.md)
 - [OriginatedACHTransactionAttributes](docs/OriginatedACHTransactionAttributes.md)
 - [OriginatedACHTransactionRelationships](docs/OriginatedACHTransactionRelationships.md)
 - [PaymentAdvanceTransaction](docs/PaymentAdvanceTransaction.md)
 - [PaymentAdvanceTransactionAttributes](docs/PaymentAdvanceTransactionAttributes.md)
 - [PaymentAdvanceTransactionRelationships](docs/PaymentAdvanceTransactionRelationships.md)
 - [PaymentCanceledTransaction](docs/PaymentCanceledTransaction.md)
 - [PaymentCanceledTransactionRelationships](docs/PaymentCanceledTransactionRelationships.md)
 - [PhoneType](docs/PhoneType.md)
 - [PinStatus](docs/PinStatus.md)
 - [PinStatusAttributes](docs/PinStatusAttributes.md)
 - [ProductType](docs/ProductType.md)
 - [PurchaseAuthorizationRequest](docs/PurchaseAuthorizationRequest.md)
 - [PurchaseAuthorizationRequestAttributes](docs/PurchaseAuthorizationRequestAttributes.md)
 - [PurchaseAuthorizationRequestRelationships](docs/PurchaseAuthorizationRequestRelationships.md)
 - [PurchaseTransaction](docs/PurchaseTransaction.md)
 - [PurchaseTransactionAttributes](docs/PurchaseTransactionAttributes.md)
 - [PurchaseTransactionAttributesMerchant](docs/PurchaseTransactionAttributesMerchant.md)
 - [PurchaseTransactionRelationships](docs/PurchaseTransactionRelationships.md)
 - [PushToCardReversalTransaction](docs/PushToCardReversalTransaction.md)
 - [PushToCardReversalTransactionRelationships](docs/PushToCardReversalTransactionRelationships.md)
 - [PushToCardTransaction](docs/PushToCardTransaction.md)
 - [PushToCardTransactionRelationships](docs/PushToCardTransactionRelationships.md)
 - [RealTimeCounterpartyType](docs/RealTimeCounterpartyType.md)
 - [RealtimeReceivedPayment](docs/RealtimeReceivedPayment.md)
 - [RealtimeReceivedPaymentAttributes](docs/RealtimeReceivedPaymentAttributes.md)
 - [RealtimeReceivedPaymentRelationships](docs/RealtimeReceivedPaymentRelationships.md)
 - [ReceivedACHTransaction](docs/ReceivedACHTransaction.md)
 - [ReceivedACHTransactionAttributes](docs/ReceivedACHTransactionAttributes.md)
 - [RecurringCreditACHPayment](docs/RecurringCreditACHPayment.md)
 - [RecurringCreditACHPaymentAttributes](docs/RecurringCreditACHPaymentAttributes.md)
 - [RecurringCreditACHPaymentRelationships](docs/RecurringCreditACHPaymentRelationships.md)
 - [RecurringCreditBookPayment](docs/RecurringCreditBookPayment.md)
 - [RecurringCreditBookPaymentAttributes](docs/RecurringCreditBookPaymentAttributes.md)
 - [RecurringCreditBookPaymentRelationships](docs/RecurringCreditBookPaymentRelationships.md)
 - [RecurringDebitACHPayment](docs/RecurringDebitACHPayment.md)
 - [Relationship](docs/Relationship.md)
 - [RelationshipData](docs/RelationshipData.md)
 - [ReleaseAccountHoldData](docs/ReleaseAccountHoldData.md)
 - [ReleaseAccountHoldDataAttributes](docs/ReleaseAccountHoldDataAttributes.md)
 - [ReleaseAccountHoldRequest](docs/ReleaseAccountHoldRequest.md)
 - [ReleaseTransaction](docs/ReleaseTransaction.md)
 - [ReleaseTransactionAttributes](docs/ReleaseTransactionAttributes.md)
 - [RemoveAccountOwnersRequest](docs/RemoveAccountOwnersRequest.md)
 - [RemoveAuthorizedUsersData](docs/RemoveAuthorizedUsersData.md)
 - [RemoveAuthorizedUsersDataAttributes](docs/RemoveAuthorizedUsersDataAttributes.md)
 - [RemoveAuthorizedUsersRequest](docs/RemoveAuthorizedUsersRequest.md)
 - [ReopenAccount200Response](docs/ReopenAccount200Response.md)
 - [ReopenAccount200ResponseData](docs/ReopenAccount200ResponseData.md)
 - [RepaidPaymentAdvanceTransaction](docs/RepaidPaymentAdvanceTransaction.md)
 - [RepaidPaymentAdvanceTransactionAttributes](docs/RepaidPaymentAdvanceTransactionAttributes.md)
 - [RepaidPaymentAdvanceTransactionRelationships](docs/RepaidPaymentAdvanceTransactionRelationships.md)
 - [ReplaceCard200Response](docs/ReplaceCard200Response.md)
 - [ReplaceCard200ResponseData](docs/ReplaceCard200ResponseData.md)
 - [ReplaceCardData](docs/ReplaceCardData.md)
 - [ReplaceCardDataAttributes](docs/ReplaceCardDataAttributes.md)
 - [ReplaceCardRequest](docs/ReplaceCardRequest.md)
 - [RequestedProductType](docs/RequestedProductType.md)
 - [ResourceIdentifier](docs/ResourceIdentifier.md)
 - [ReturnedACHTransaction](docs/ReturnedACHTransaction.md)
 - [ReturnedACHTransactionAttributes](docs/ReturnedACHTransactionAttributes.md)
 - [ReturnedACHTransactionRelationships](docs/ReturnedACHTransactionRelationships.md)
 - [ReturnedCheckDepositTransaction](docs/ReturnedCheckDepositTransaction.md)
 - [ReturnedCheckDepositTransactionAttributes](docs/ReturnedCheckDepositTransactionAttributes.md)
 - [ReturnedCheckPaymentTransaction](docs/ReturnedCheckPaymentTransaction.md)
 - [ReturnedCheckPaymentTransactionAttributes](docs/ReturnedCheckPaymentTransactionAttributes.md)
 - [ReturnedReceivedACHTransaction](docs/ReturnedReceivedACHTransaction.md)
 - [ReturnedReceivedACHTransactionAttributes](docs/ReturnedReceivedACHTransactionAttributes.md)
 - [ReturnedReceivedACHTransactionRelationships](docs/ReturnedReceivedACHTransactionRelationships.md)
 - [ReturnedWireTransaction](docs/ReturnedWireTransaction.md)
 - [ReturnedWireTransactionAttributes](docs/ReturnedWireTransactionAttributes.md)
 - [ReverseFee201Response](docs/ReverseFee201Response.md)
 - [ReverseFeeData](docs/ReverseFeeData.md)
 - [ReverseFeeDataAttributes](docs/ReverseFeeDataAttributes.md)
 - [ReverseFeeDataRelationships](docs/ReverseFeeDataRelationships.md)
 - [ReverseFeeRequest](docs/ReverseFeeRequest.md)
 - [RewardTransaction](docs/RewardTransaction.md)
 - [RewardTransactionAttributes](docs/RewardTransactionAttributes.md)
 - [RewardTransactionRelationships](docs/RewardTransactionRelationships.md)
 - [RichMerchantDataType](docs/RichMerchantDataType.md)
 - [RichMerchantDataTypeAddress](docs/RichMerchantDataTypeAddress.md)
 - [RichMerchantDataTypeCategoriesInner](docs/RichMerchantDataTypeCategoriesInner.md)
 - [ScheduleType](docs/ScheduleType.md)
 - [SendDrawdownPayment200Response](docs/SendDrawdownPayment200Response.md)
 - [SendDrawdownPaymentData](docs/SendDrawdownPaymentData.md)
 - [SendDrawdownPaymentDataAttributes](docs/SendDrawdownPaymentDataAttributes.md)
 - [SendDrawdownPaymentRequest](docs/SendDrawdownPaymentRequest.md)
 - [SoleProprietorAnnualRevenueType](docs/SoleProprietorAnnualRevenueType.md)
 - [SoleProprietorNumberOfEmployeesType](docs/SoleProprietorNumberOfEmployeesType.md)
 - [SourceOfIncomeType](docs/SourceOfIncomeType.md)
 - [StoreLocation](docs/StoreLocation.md)
 - [StoreLocationAttributes](docs/StoreLocationAttributes.md)
 - [ToManyRelationship](docs/ToManyRelationship.md)
 - [TotalAccruedInterestType](docs/TotalAccruedInterestType.md)
 - [Transaction](docs/Transaction.md)
 - [TransactionCardFraudCase](docs/TransactionCardFraudCase.md)
 - [UpdateACHPaymentData](docs/UpdateACHPaymentData.md)
 - [UpdateACHPaymentDataAttributes](docs/UpdateACHPaymentDataAttributes.md)
 - [UpdateACHPaymentRequest](docs/UpdateACHPaymentRequest.md)
 - [UpdateACHReceivedPaymentData](docs/UpdateACHReceivedPaymentData.md)
 - [UpdateACHReceivedPaymentDataAttributes](docs/UpdateACHReceivedPaymentDataAttributes.md)
 - [UpdateACHReceivedPaymentRequest](docs/UpdateACHReceivedPaymentRequest.md)
 - [UpdateAccountRequest](docs/UpdateAccountRequest.md)
 - [UpdateApplicationRequest](docs/UpdateApplicationRequest.md)
 - [UpdateBookPaymentData](docs/UpdateBookPaymentData.md)
 - [UpdateBookPaymentDataAttributes](docs/UpdateBookPaymentDataAttributes.md)
 - [UpdateBookPaymentRequest](docs/UpdateBookPaymentRequest.md)
 - [UpdateBookTransactionData](docs/UpdateBookTransactionData.md)
 - [UpdateBookTransactionDataAttributes](docs/UpdateBookTransactionDataAttributes.md)
 - [UpdateBookTransactionRequest](docs/UpdateBookTransactionRequest.md)
 - [UpdateBusinessApplicationData](docs/UpdateBusinessApplicationData.md)
 - [UpdateBusinessApplicationDataAttributes](docs/UpdateBusinessApplicationDataAttributes.md)
 - [UpdateBusinessApplicationRequest](docs/UpdateBusinessApplicationRequest.md)
 - [UpdateBusinessBeneficialOwner201Response](docs/UpdateBusinessBeneficialOwner201Response.md)
 - [UpdateBusinessBeneficialOwnerData](docs/UpdateBusinessBeneficialOwnerData.md)
 - [UpdateBusinessBeneficialOwnerDataAttributes](docs/UpdateBusinessBeneficialOwnerDataAttributes.md)
 - [UpdateBusinessBeneficialOwnerDataRelationships](docs/UpdateBusinessBeneficialOwnerDataRelationships.md)
 - [UpdateBusinessBeneficialOwnerRequest](docs/UpdateBusinessBeneficialOwnerRequest.md)
 - [UpdateBusinessCustomerData](docs/UpdateBusinessCustomerData.md)
 - [UpdateBusinessCustomerDataAttributes](docs/UpdateBusinessCustomerDataAttributes.md)
 - [UpdateBusinessCustomerOfficer200Response](docs/UpdateBusinessCustomerOfficer200Response.md)
 - [UpdateBusinessCustomerOfficerData](docs/UpdateBusinessCustomerOfficerData.md)
 - [UpdateBusinessCustomerOfficerDataAttributes](docs/UpdateBusinessCustomerOfficerDataAttributes.md)
 - [UpdateBusinessCustomerOfficerRequest](docs/UpdateBusinessCustomerOfficerRequest.md)
 - [UpdateBusinessCustomerRequest](docs/UpdateBusinessCustomerRequest.md)
 - [UpdateBusinessOfficerData](docs/UpdateBusinessOfficerData.md)
 - [UpdateBusinessOfficerDataAttributes](docs/UpdateBusinessOfficerDataAttributes.md)
 - [UpdateBusinessOfficerRequest](docs/UpdateBusinessOfficerRequest.md)
 - [UpdateCard200Response](docs/UpdateCard200Response.md)
 - [UpdateCard200ResponseData](docs/UpdateCard200ResponseData.md)
 - [UpdateCardData](docs/UpdateCardData.md)
 - [UpdateCardDataAttributes](docs/UpdateCardDataAttributes.md)
 - [UpdateCardRequest](docs/UpdateCardRequest.md)
 - [UpdateChargebackTransactionData](docs/UpdateChargebackTransactionData.md)
 - [UpdateChargebackTransactionDataAttributes](docs/UpdateChargebackTransactionDataAttributes.md)
 - [UpdateChargebackTransactionRequest](docs/UpdateChargebackTransactionRequest.md)
 - [UpdateCheckDepositRequest](docs/UpdateCheckDepositRequest.md)
 - [UpdateCounterparty200Response](docs/UpdateCounterparty200Response.md)
 - [UpdateCounterpartyData](docs/UpdateCounterpartyData.md)
 - [UpdateCounterpartyDataAttributes](docs/UpdateCounterpartyDataAttributes.md)
 - [UpdateCounterpartyRequest](docs/UpdateCounterpartyRequest.md)
 - [UpdateCreditAccountData](docs/UpdateCreditAccountData.md)
 - [UpdateCreditAccountDataAttributes](docs/UpdateCreditAccountDataAttributes.md)
 - [UpdateCreditAccountRequest](docs/UpdateCreditAccountRequest.md)
 - [UpdateCustomer200Response](docs/UpdateCustomer200Response.md)
 - [UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
 - [UpdateData](docs/UpdateData.md)
 - [UpdateDataAttributes](docs/UpdateDataAttributes.md)
 - [UpdateDepositAccountData](docs/UpdateDepositAccountData.md)
 - [UpdateDepositAccountDataAttributes](docs/UpdateDepositAccountDataAttributes.md)
 - [UpdateDepositAccountRequest](docs/UpdateDepositAccountRequest.md)
 - [UpdateIndividualApplicationData](docs/UpdateIndividualApplicationData.md)
 - [UpdateIndividualApplicationDataAttributes](docs/UpdateIndividualApplicationDataAttributes.md)
 - [UpdateIndividualApplicationRequest](docs/UpdateIndividualApplicationRequest.md)
 - [UpdateIndividualCustomerData](docs/UpdateIndividualCustomerData.md)
 - [UpdateIndividualCustomerDataAttributes](docs/UpdateIndividualCustomerDataAttributes.md)
 - [UpdateIndividualCustomerRequest](docs/UpdateIndividualCustomerRequest.md)
 - [UpdatePayment200Response](docs/UpdatePayment200Response.md)
 - [UpdatePayment200ResponseData](docs/UpdatePayment200ResponseData.md)
 - [UpdatePaymentRequest](docs/UpdatePaymentRequest.md)
 - [UpdatePolicyData](docs/UpdatePolicyData.md)
 - [UpdatePolicyDataAttributes](docs/UpdatePolicyDataAttributes.md)
 - [UpdatePolicyRequest](docs/UpdatePolicyRequest.md)
 - [UpdateRealtimeReceivedPaymentData](docs/UpdateRealtimeReceivedPaymentData.md)
 - [UpdateRealtimeReceivedPaymentRequest](docs/UpdateRealtimeReceivedPaymentRequest.md)
 - [UpdateReceivedPayment200Response](docs/UpdateReceivedPayment200Response.md)
 - [UpdateReceivedPaymentRequest](docs/UpdateReceivedPaymentRequest.md)
 - [UpdateSoleProprietorApplicationData](docs/UpdateSoleProprietorApplicationData.md)
 - [UpdateSoleProprietorApplicationDataAttributes](docs/UpdateSoleProprietorApplicationDataAttributes.md)
 - [UpdateSoleProprietorApplicationRequest](docs/UpdateSoleProprietorApplicationRequest.md)
 - [UpdateTagsData](docs/UpdateTagsData.md)
 - [UpdateTagsDataAttributes](docs/UpdateTagsDataAttributes.md)
 - [UpdateTagsRequest](docs/UpdateTagsRequest.md)
 - [UpdateTransaction200Response](docs/UpdateTransaction200Response.md)
 - [UpdateTransactionRequest](docs/UpdateTransactionRequest.md)
 - [UpdateWalletData](docs/UpdateWalletData.md)
 - [UpdateWalletDataAttributes](docs/UpdateWalletDataAttributes.md)
 - [UpdateWalletRequest](docs/UpdateWalletRequest.md)
 - [VerifyDocumentData](docs/VerifyDocumentData.md)
 - [VerifyDocumentDataAttributes](docs/VerifyDocumentDataAttributes.md)
 - [VerifyDocumentRequest](docs/VerifyDocumentRequest.md)
 - [WalletAccount](docs/WalletAccount.md)
 - [WalletAccountAttributes](docs/WalletAccountAttributes.md)
 - [WireCounterpartyType](docs/WireCounterpartyType.md)
 - [WireDrawdown](docs/WireDrawdown.md)
 - [WireDrawdownAttributes](docs/WireDrawdownAttributes.md)
 - [WireDrawdownRelationships](docs/WireDrawdownRelationships.md)
 - [WirePayment](docs/WirePayment.md)
 - [WirePaymentAttributes](docs/WirePaymentAttributes.md)
 - [WirePaymentRelationships](docs/WirePaymentRelationships.md)
 - [WireTransaction](docs/WireTransaction.md)
 - [WireTransactionAttributes](docs/WireTransactionAttributes.md)
 - [WriteOffTransaction](docs/WriteOffTransaction.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication (JWT)

