# BusinessApplicationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. | 
**message** | **str** | A message describing the BusinessApplication status. | 
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | Optional. The date the resource was updated. | [optional] 
**name** | **str** | Name of the business. | 
**dba** | **str** | Optional. \&quot;Doing business as\&quot;. | [optional] 
**address** | [**Address**](Address.md) | Address of the business. | 
**operating_address** | [**Address**](Address.md) | Optional. The operating address of the business. Required when the address is of a registered agent or if any beneficial owner or officer is non-US. | [optional] 
**phone** | [**Phone**](Phone.md) | Phone of the business. | 
**state_of_incorporation** | **str** | Two letters representing a US state. | 
**ein** | **str** | Business EIN (numbers only). | 
**industry** | [**Industry**](Industry.md) | Optional. Business industry, if specified. | [optional] 
**entity_type** | **str** | The business entity type. Documented values are LLC, Partnership, PubliclyTradedCorporation, PrivatelyHeldCorporation and NotForProfitOrganization, but the live API also returns Corporation, so the documented list is not exhaustive. Kept as a free-form string (not a strict enum) to avoid breaking strict client deserialization on undocumented values. | 
**website** | **str** | Optional. Business&#39;s website. | [optional] 
**contact** | [**BusinessContact**](BusinessContact.md) | Primary contact of the business. | 
**officer** | [**Officer**](Officer.md) | Officer representing the business, must be the CEO, COO, CFO, President, BenefitsAdministrationOfficer, CIO, VP, AVP, Treasurer, Secretary, Controller, Manager, Partner or Member. The officer would need to go over KYC process and provide documents. | 
**beneficial_owners** | [**List[BeneficialOwner2]**](BeneficialOwner2.md) |  | 
**annual_revenue** | [**AnnualRevenue**](AnnualRevenue.md) | Optional. Annual revenue of the business. | [optional] 
**number_of_employees** | [**NumberOfEmployees**](NumberOfEmployees.md) | Optional. Number of employees of the business. | [optional] 
**cash_flow** | [**CashFlow**](CashFlow.md) | Optional. Cash flow of the business. | [optional] 
**year_of_incorporation** | **str** | Year of incorporation of the business. | 
**countries_of_operation** | **List[str]** | Optional. An array of two letter codes representing the countries of operation of the business. | [optional] 
**stock_symbol** | **str** | Optional. The stock symbol (ticker) of the business. | [optional] 
**business_vertical** | [**BusinessVertical**](BusinessVertical.md) | The business vertical of the business. | 
**ip** | **str** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] 
**archived** | **bool** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. An application becomes archived once the corresponding customer is archived. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.business_application_attributes import BusinessApplicationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessApplicationAttributes from a JSON string
business_application_attributes_instance = BusinessApplicationAttributes.from_json(json)
# print the JSON string representation of the object
print(BusinessApplicationAttributes.to_json())

# convert the object into a dict
business_application_attributes_dict = business_application_attributes_instance.to_dict()
# create an instance of BusinessApplicationAttributes from a dict
business_application_attributes_from_dict = BusinessApplicationAttributes.from_dict(business_application_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


