# CreateSoleProprietorApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssn** | **str** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. | [optional] 
**passport** | **str** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] 
**nationality** | **str** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] 
**full_name** | [**FullName**](FullName.md) | Full name of the individual. | 
**date_of_birth** | **str** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**Address**](Address.md) | Address of the individual. Must be a US address. | 
**phone** | [**Phone**](Phone.md) | Phone number of the individual. | 
**email** | **str** | Email address of the individual. | 
**sole_proprietorship** | **bool** | Set this to true in order to indicate that the individual is a sole proprietor. | 
**ein** | **str** | Optional. If the individual is a sole proprietor who has an Employer Identification Number, specify it here. Not all sole proprietors have an EIN, so this attribute is optional, even when soleProprietorship is set to true. | [optional] 
**dba** | **str** | Optional. If the individual is a sole proprietor who is doing business under a different name, specify it here. This attribute is optional, even when soleProprietorship is set to true. | [optional] 
**evaluation_params** | **str** | Optional. Evaluation Params for this entity. | [optional] 
**annual_revenue** | [**SoleProprietorAnnualRevenue**](SoleProprietorAnnualRevenue.md) | Required if nationality is not US. For sole proprietors, specify the annual revenue here. | 
**number_of_employees** | [**SoleProprietorNumberOfEmployees**](SoleProprietorNumberOfEmployees.md) | Required if nationality is not US. For sole proprietors, specify the number of employees here. | 
**business_vertical** | [**BusinessVertical**](BusinessVertical.md) | For sole proprietors, specify the business vertical here. | 
**website** | **str** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. | 
**ip** | **str** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**device_fingerprints** | [**List[DeviceFingerprint]**](DeviceFingerprint.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] 
**jwt_subject** | **str** | Optional. See this section for more information. | [optional] 
**banks** | **List[str]** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] 
**requested_products** | [**List[RequestedProduct]**](RequestedProduct.md) | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_sole_proprietor_application_data_attributes import CreateSoleProprietorApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSoleProprietorApplicationDataAttributes from a JSON string
create_sole_proprietor_application_data_attributes_instance = CreateSoleProprietorApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateSoleProprietorApplicationDataAttributes.to_json())

# convert the object into a dict
create_sole_proprietor_application_data_attributes_dict = create_sole_proprietor_application_data_attributes_instance.to_dict()
# create an instance of CreateSoleProprietorApplicationDataAttributes from a dict
create_sole_proprietor_application_data_attributes_from_dict = CreateSoleProprietorApplicationDataAttributes.from_dict(create_sole_proprietor_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


