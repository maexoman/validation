import * as AnyAnnotations from './annotations/AnyTypeAnnotations';
import * as ArrayAnnotaions from './annotations/ArrayTypeAnnotations';
import * as NumberAnnotations from './annotations/NumberTypeAnnotations';
import * as ObjectAnnotations from './annotations/ObjectTypeAnnotations';
import * as StringAnnotations from './annotations/StringTypeAnnotations';
export declare const Required: PropertyDecorator;
export declare const Nullable: PropertyDecorator;
export declare const NotRequired: PropertyDecorator;
export declare const NotNullable: PropertyDecorator;
export declare const Const: typeof AnyAnnotations.Const;
export declare const Enum: typeof AnyAnnotations.Enum;
export declare const StringType: PropertyDecorator;
export declare const MinLength: typeof StringAnnotations.MinLength;
export declare const MaxLength: typeof StringAnnotations.MaxLength;
export declare const Pattern: typeof StringAnnotations.Pattern;
export declare const NumberType: PropertyDecorator;
export declare const Minimum: typeof NumberAnnotations.Minimum;
export declare const InclusiveMinimum: typeof NumberAnnotations.InclusiveMinimum;
export declare const ExclusiveMinimum: typeof NumberAnnotations.ExclusiveMinimum;
export declare const Maximum: typeof NumberAnnotations.Maximum;
export declare const InclusiveMaximum: typeof NumberAnnotations.InclusiveMaximum;
export declare const ExclusiveMaximum: typeof NumberAnnotations.ExclusiveMaximum;
export declare const MultipleOf: typeof NumberAnnotations.MultipleOf;
export declare const ObjectType: typeof ObjectAnnotations.ObjectType;
export declare const ArrayType: PropertyDecorator;
export declare const MinItems: typeof ArrayAnnotaions.MinItems;
export declare const MaxItems: typeof ArrayAnnotaions.MaxItems;
export declare const Items: typeof ArrayAnnotaions.Items;
export declare const EMail: PropertyDecorator;
