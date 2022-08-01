/**
 * @author Maximilian A. Heinrich <mex.heinrich@gmail.com>
 * @description Defines configuration methods for object-types.
 * @version 1.0.0
 */
import DataObject from '../DataObject';
import AbstractTypeDefinition from './AbstractTypeDefinition';
/**
 * Class to define object-types using methods.
 */
export default class ObjectTypeDefinition extends AbstractTypeDefinition {
    /**
     * Sets the sanatizer of the type definition.
     * @param dataObject structure of the value.
     */
    constructor(dataObject: typeof DataObject);
}
