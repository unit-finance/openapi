# IndividualVirtualDebitCardAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | [optional] 
**last4_digits** | **str** | Last 4 digits of the debit card. | 
**expiration_date** | **str** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. | 
**bin** | **str** | 9-digit Bank Identification Number (BIN). | 
**status** | **str** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. | 

## Example

```python
from unit_finance_sdk.models.individual_virtual_debit_card_attributes import IndividualVirtualDebitCardAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualVirtualDebitCardAttributes from a JSON string
individual_virtual_debit_card_attributes_instance = IndividualVirtualDebitCardAttributes.from_json(json)
# print the JSON string representation of the object
print(IndividualVirtualDebitCardAttributes.to_json())

# convert the object into a dict
individual_virtual_debit_card_attributes_dict = individual_virtual_debit_card_attributes_instance.to_dict()
# create an instance of IndividualVirtualDebitCardAttributes from a dict
individual_virtual_debit_card_attributes_from_dict = IndividualVirtualDebitCardAttributes.from_dict(individual_virtual_debit_card_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


