# CreateIndividualApplicationDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssn** | **str** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. | [optional] 
**passport** | **str** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] 
**nationality** | **str** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] 
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the individual. | 
**date_of_birth** | **str** | Date only (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | Address of the individual. Must be a US address. | 
**phone** | [**PhoneType**](PhoneType.md) | Phone number of the individual. | 
**email** | **str** | Email address of the individual. | 
**evaluation_params** | **str** | Optional. Evaluation Params for this entity. | [optional] 
**occupation** | [**OccupationType**](OccupationType.md) | Occupation of the individual. | 
**annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Required if nationality is not US. Annual income of the individual. | 
**source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Required if nationality is not US. Source of income of the individual. | 
**ip** | **str** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**device_fingerprints** | [**List[DeviceFingerprintType]**](DeviceFingerprintType.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] 
**jwt_subject** | **str** | Optional. See this section for more information. | [optional] 
**banks** | **List[str]** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_individual_application_data_attributes import CreateIndividualApplicationDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualApplicationDataAttributes from a JSON string
create_individual_application_data_attributes_instance = CreateIndividualApplicationDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualApplicationDataAttributes.to_json())

# convert the object into a dict
create_individual_application_data_attributes_dict = create_individual_application_data_attributes_instance.to_dict()
# create an instance of CreateIndividualApplicationDataAttributes from a dict
create_individual_application_data_attributes_from_dict = CreateIndividualApplicationDataAttributes.from_dict(create_individual_application_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


