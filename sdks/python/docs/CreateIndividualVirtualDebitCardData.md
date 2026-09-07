# CreateIndividualVirtualDebitCardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateIndividualVirtualDebitCardDataAttributes**](CreateIndividualVirtualDebitCardDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_individual_virtual_debit_card_data import CreateIndividualVirtualDebitCardData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualVirtualDebitCardData from a JSON string
create_individual_virtual_debit_card_data_instance = CreateIndividualVirtualDebitCardData.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualVirtualDebitCardData.to_json())

# convert the object into a dict
create_individual_virtual_debit_card_data_dict = create_individual_virtual_debit_card_data_instance.to_dict()
# create an instance of CreateIndividualVirtualDebitCardData from a dict
create_individual_virtual_debit_card_data_from_dict = CreateIndividualVirtualDebitCardData.from_dict(create_individual_virtual_debit_card_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


