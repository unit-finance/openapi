# BusinessVirtualDebitCardAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | [optional] 
**last4_digits** | **str** | Last 4 digits of the debit card. | 
**expiration_date** | **str** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. | 
**ssn** | **str** | SSN of the card holder (numbers only), if specified during card creation. | [optional] 
**passport** | **str** | Passport number of the card holder, if specified during card creation. | [optional] 
**nationality** | **str** | Required if a passport is used as the main ID and optional when ssn is used. Two letters representing the card holder nationality. (e.g. \&quot;US\&quot;). | [optional] 
**full_name** | [**FullNameType**](FullNameType.md) | Full name of the card holder. | 
**date_of_birth** | **date** | Date of birth of the card holder (e.g. \&quot;2001-08-15\&quot;). | 
**address** | [**AddressType**](AddressType.md) | Address of the card holder. | 
**bin** | **str** | 9-digit Bank Identification Number (BIN). | 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the card holder. | 
**email** | **str** | Email address of the card holder. | 
**status** | **str** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. | 

## Example

```python
from unit_finance_sdk.models.business_virtual_debit_card_attributes import BusinessVirtualDebitCardAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessVirtualDebitCardAttributes from a JSON string
business_virtual_debit_card_attributes_instance = BusinessVirtualDebitCardAttributes.from_json(json)
# print the JSON string representation of the object
print(BusinessVirtualDebitCardAttributes.to_json())

# convert the object into a dict
business_virtual_debit_card_attributes_dict = business_virtual_debit_card_attributes_instance.to_dict()
# create an instance of BusinessVirtualDebitCardAttributes from a dict
business_virtual_debit_card_attributes_from_dict = BusinessVirtualDebitCardAttributes.from_dict(business_virtual_debit_card_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


