# TaxForm

`taxForm` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**TaxFormAttributes**](TaxFormAttributes.md) |  | [default to undefined]
**relationships** | [**TaxFormRelationships**](TaxFormRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TaxForm } from 'unit-openapi-node-sdk';

const instance: TaxForm = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
