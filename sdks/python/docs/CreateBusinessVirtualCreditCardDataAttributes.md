# CreateBusinessVirtualCreditCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the card holder. | 
**date_of_birth** | **date** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | Address of the card holder. | 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | 
**email** | **str** | Email address of the card holder. | 
**idempotency_key** | **str** | See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**limits** | **Dict[str, object]** | See Limits (cents). | [optional] 
**expiry_date** | **str** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] 
**ssn** | **str** | Optional. SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. | [optional] 
**passport** | **str** | Passport number of the individual. Valid only for non-US persons. | [optional] 
**nationality** | **str** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_business_virtual_credit_card_data_attributes import CreateBusinessVirtualCreditCardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessVirtualCreditCardDataAttributes from a JSON string
create_business_virtual_credit_card_data_attributes_instance = CreateBusinessVirtualCreditCardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessVirtualCreditCardDataAttributes.to_json())

# convert the object into a dict
create_business_virtual_credit_card_data_attributes_dict = create_business_virtual_credit_card_data_attributes_instance.to_dict()
# create an instance of CreateBusinessVirtualCreditCardDataAttributes from a dict
create_business_virtual_credit_card_data_attributes_from_dict = CreateBusinessVirtualCreditCardDataAttributes.from_dict(create_business_virtual_credit_card_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


