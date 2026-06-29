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
*ApplicationsApi* | [**cancelApplication**](docs/ApplicationsApi.md#cancelapplication) | **POST** /applications/{id}/cancel | Cancel an application
*ApplicationsApi* | [**checkRegisteredAgentAddress**](docs/ApplicationsApi.md#checkregisteredagentaddress) | **POST** /applications/check-registered-agent-address | Check a registered agent address
*ApplicationsApi* | [**createApplication**](docs/ApplicationsApi.md#createapplication) | **POST** /applications | Create an application
*ApplicationsApi* | [**getById**](docs/ApplicationsApi.md#getbyid) | **GET** /applications/{id} | Get an application
*ApplicationsApi* | [**list**](docs/ApplicationsApi.md#list) | **GET** /applications | List applications
*ApplicationsApi* | [**updateApplication**](docs/ApplicationsApi.md#updateapplication) | **PATCH** /applications/{id} | Update an application
*ApplicationsApi* | [**updateBusinessBeneficialOwner**](docs/ApplicationsApi.md#updatebusinessbeneficialowner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner
*FeesApi* | [**createFee**](docs/FeesApi.md#createfee) | **POST** /fees | Create a fee
*FeesApi* | [**reverseFee**](docs/FeesApi.md#reversefee) | **POST** /fees/reverse | Reverse a fee


### Documentation For Models

 - [Address](docs/Address.md)
 - [AnnualIncome](docs/AnnualIncome.md)
 - [AnnualRevenue](docs/AnnualRevenue.md)
 - [ApplicationDocument](docs/ApplicationDocument.md)
 - [ApplicationDocumentAttributes](docs/ApplicationDocumentAttributes.md)
 - [BeneficialOwner](docs/BeneficialOwner.md)
 - [BeneficialOwner2](docs/BeneficialOwner2.md)
 - [BeneficialOwnerAttributes](docs/BeneficialOwnerAttributes.md)
 - [BeneficialOwnerRequest](docs/BeneficialOwnerRequest.md)
 - [BusinessAnnualRevenue](docs/BusinessAnnualRevenue.md)
 - [BusinessApplication](docs/BusinessApplication.md)
 - [BusinessApplicationAttributes](docs/BusinessApplicationAttributes.md)
 - [BusinessApplicationRelationships](docs/BusinessApplicationRelationships.md)
 - [BusinessContact](docs/BusinessContact.md)
 - [BusinessNumberOfEmployees](docs/BusinessNumberOfEmployees.md)
 - [BusinessVertical](docs/BusinessVertical.md)
 - [CancelApplication201Response](docs/CancelApplication201Response.md)
 - [CancelApplicationData](docs/CancelApplicationData.md)
 - [CancelApplicationDataAttributes](docs/CancelApplicationDataAttributes.md)
 - [CancelApplicationRequest](docs/CancelApplicationRequest.md)
 - [CashFlow](docs/CashFlow.md)
 - [CheckRegisteredAgentAddress](docs/CheckRegisteredAgentAddress.md)
 - [CheckRegisteredAgentAddress200Response](docs/CheckRegisteredAgentAddress200Response.md)
 - [CheckRegisteredAgentAddress200ResponseData](docs/CheckRegisteredAgentAddress200ResponseData.md)
 - [CheckRegisteredAgentAddress200ResponseDataAttributes](docs/CheckRegisteredAgentAddress200ResponseDataAttributes.md)
 - [CheckRegisteredAgentAddressData](docs/CheckRegisteredAgentAddressData.md)
 - [CheckRegisteredAgentAddressDataAttributes](docs/CheckRegisteredAgentAddressDataAttributes.md)
 - [CheckRegisteredAgentAddressRequest](docs/CheckRegisteredAgentAddressRequest.md)
 - [CreateApplication201Response](docs/CreateApplication201Response.md)
 - [CreateApplication201ResponseIncludedInner](docs/CreateApplication201ResponseIncludedInner.md)
 - [CreateApplicationRequest](docs/CreateApplicationRequest.md)
 - [CreateBusinessApplicationData](docs/CreateBusinessApplicationData.md)
 - [CreateBusinessApplicationDataAttributes](docs/CreateBusinessApplicationDataAttributes.md)
 - [CreateBusinessApplicationRequest](docs/CreateBusinessApplicationRequest.md)
 - [CreateFee201Response](docs/CreateFee201Response.md)
 - [CreateFeeData](docs/CreateFeeData.md)
 - [CreateFeeDataAttributes](docs/CreateFeeDataAttributes.md)
 - [CreateFeeDataRelationships](docs/CreateFeeDataRelationships.md)
 - [CreateFeeRequest](docs/CreateFeeRequest.md)
 - [CreateIndividualApplicationData](docs/CreateIndividualApplicationData.md)
 - [CreateIndividualApplicationDataAttributes](docs/CreateIndividualApplicationDataAttributes.md)
 - [CreateIndividualApplicationRequest](docs/CreateIndividualApplicationRequest.md)
 - [CreateSoleProprietorApplicationData](docs/CreateSoleProprietorApplicationData.md)
 - [CreateSoleProprietorApplicationDataAttributes](docs/CreateSoleProprietorApplicationDataAttributes.md)
 - [CreateSoleProprietorApplicationRequest](docs/CreateSoleProprietorApplicationRequest.md)
 - [DeviceFingerprint](docs/DeviceFingerprint.md)
 - [ErrorDocument](docs/ErrorDocument.md)
 - [ErrorDocumentErrorsInner](docs/ErrorDocumentErrorsInner.md)
 - [ErrorDocumentErrorsInnerSource](docs/ErrorDocumentErrorsInnerSource.md)
 - [Fee](docs/Fee.md)
 - [FeeAttributes](docs/FeeAttributes.md)
 - [FeeRelationships](docs/FeeRelationships.md)
 - [FeeReversal](docs/FeeReversal.md)
 - [FeeReversalAttributes](docs/FeeReversalAttributes.md)
 - [FeeReversalRelationships](docs/FeeReversalRelationships.md)
 - [FullName](docs/FullName.md)
 - [IndividualApplication](docs/IndividualApplication.md)
 - [IndividualApplicationAttributes](docs/IndividualApplicationAttributes.md)
 - [IndividualApplicationRelationships](docs/IndividualApplicationRelationships.md)
 - [Industry](docs/Industry.md)
 - [List200Response](docs/List200Response.md)
 - [List200ResponseDataInner](docs/List200ResponseDataInner.md)
 - [Meta](docs/Meta.md)
 - [MetaPagination](docs/MetaPagination.md)
 - [NumberOfEmployees](docs/NumberOfEmployees.md)
 - [Occupation](docs/Occupation.md)
 - [Officer](docs/Officer.md)
 - [OfficerRequest](docs/OfficerRequest.md)
 - [Phone](docs/Phone.md)
 - [Relationship](docs/Relationship.md)
 - [RelationshipData](docs/RelationshipData.md)
 - [RequestedProduct](docs/RequestedProduct.md)
 - [ResourceIdentifier](docs/ResourceIdentifier.md)
 - [ReverseFee201Response](docs/ReverseFee201Response.md)
 - [ReverseFeeData](docs/ReverseFeeData.md)
 - [ReverseFeeDataAttributes](docs/ReverseFeeDataAttributes.md)
 - [ReverseFeeDataRelationships](docs/ReverseFeeDataRelationships.md)
 - [ReverseFeeRequest](docs/ReverseFeeRequest.md)
 - [SoleProprietorAnnualRevenue](docs/SoleProprietorAnnualRevenue.md)
 - [SoleProprietorNumberOfEmployees](docs/SoleProprietorNumberOfEmployees.md)
 - [SourceOfIncome](docs/SourceOfIncome.md)
 - [ToManyRelationship](docs/ToManyRelationship.md)
 - [UpdateApplicationRequest](docs/UpdateApplicationRequest.md)
 - [UpdateBusinessApplicationData](docs/UpdateBusinessApplicationData.md)
 - [UpdateBusinessApplicationDataAttributes](docs/UpdateBusinessApplicationDataAttributes.md)
 - [UpdateBusinessApplicationRequest](docs/UpdateBusinessApplicationRequest.md)
 - [UpdateBusinessBeneficialOwner201Response](docs/UpdateBusinessBeneficialOwner201Response.md)
 - [UpdateBusinessBeneficialOwnerData](docs/UpdateBusinessBeneficialOwnerData.md)
 - [UpdateBusinessBeneficialOwnerDataAttributes](docs/UpdateBusinessBeneficialOwnerDataAttributes.md)
 - [UpdateBusinessBeneficialOwnerDataRelationships](docs/UpdateBusinessBeneficialOwnerDataRelationships.md)
 - [UpdateBusinessBeneficialOwnerRequest](docs/UpdateBusinessBeneficialOwnerRequest.md)
 - [UpdateBusinessOfficerData](docs/UpdateBusinessOfficerData.md)
 - [UpdateBusinessOfficerDataAttributes](docs/UpdateBusinessOfficerDataAttributes.md)
 - [UpdateBusinessOfficerRequest](docs/UpdateBusinessOfficerRequest.md)
 - [UpdateIndividualApplicationData](docs/UpdateIndividualApplicationData.md)
 - [UpdateIndividualApplicationDataAttributes](docs/UpdateIndividualApplicationDataAttributes.md)
 - [UpdateIndividualApplicationRequest](docs/UpdateIndividualApplicationRequest.md)
 - [UpdateSoleProprietorApplicationData](docs/UpdateSoleProprietorApplicationData.md)
 - [UpdateSoleProprietorApplicationDataAttributes](docs/UpdateSoleProprietorApplicationDataAttributes.md)
 - [UpdateSoleProprietorApplicationRequest](docs/UpdateSoleProprietorApplicationRequest.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication (JWT)

