# CreateACHPaymentExistingCounterpartyDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | 
**counterparty** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_existing_counterparty_data_relationships import CreateACHPaymentExistingCounterpartyDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentExistingCounterpartyDataRelationships from a JSON string
create_ach_payment_existing_counterparty_data_relationships_instance = CreateACHPaymentExistingCounterpartyDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentExistingCounterpartyDataRelationships.to_json())

# convert the object into a dict
create_ach_payment_existing_counterparty_data_relationships_dict = create_ach_payment_existing_counterparty_data_relationships_instance.to_dict()
# create an instance of CreateACHPaymentExistingCounterpartyDataRelationships from a dict
create_ach_payment_existing_counterparty_data_relationships_from_dict = CreateACHPaymentExistingCounterpartyDataRelationships.from_dict(create_ach_payment_existing_counterparty_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


