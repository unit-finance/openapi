# CreateIndividualVirtualDebitCardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **str** | See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**limits** | **Dict[str, object]** | See Limits (cents). | [optional] 
**expiry_date** | **str** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_individual_virtual_debit_card_data_attributes import CreateIndividualVirtualDebitCardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualVirtualDebitCardDataAttributes from a JSON string
create_individual_virtual_debit_card_data_attributes_instance = CreateIndividualVirtualDebitCardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualVirtualDebitCardDataAttributes.to_json())

# convert the object into a dict
create_individual_virtual_debit_card_data_attributes_dict = create_individual_virtual_debit_card_data_attributes_instance.to_dict()
# create an instance of CreateIndividualVirtualDebitCardDataAttributes from a dict
create_individual_virtual_debit_card_data_attributes_from_dict = CreateIndividualVirtualDebitCardDataAttributes.from_dict(create_individual_virtual_debit_card_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


