# CreateIndividualDebitCardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateIndividualDebitCardDataAttributes**](CreateIndividualDebitCardDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_individual_debit_card_data import CreateIndividualDebitCardData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualDebitCardData from a JSON string
create_individual_debit_card_data_instance = CreateIndividualDebitCardData.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualDebitCardData.to_json())

# convert the object into a dict
create_individual_debit_card_data_dict = create_individual_debit_card_data_instance.to_dict()
# create an instance of CreateIndividualDebitCardData from a dict
create_individual_debit_card_data_from_dict = CreateIndividualDebitCardData.from_dict(create_individual_debit_card_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


