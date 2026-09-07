# CreateIndividualDebitCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateIndividualDebitCardData**](CreateIndividualDebitCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_individual_debit_card_request import CreateIndividualDebitCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIndividualDebitCardRequest from a JSON string
create_individual_debit_card_request_instance = CreateIndividualDebitCardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateIndividualDebitCardRequest.to_json())

# convert the object into a dict
create_individual_debit_card_request_dict = create_individual_debit_card_request_instance.to_dict()
# create an instance of CreateIndividualDebitCardRequest from a dict
create_individual_debit_card_request_from_dict = CreateIndividualDebitCardRequest.from_dict(create_individual_debit_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


