// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    AttributeContentType,
    AttributeType,
    BaseAttributeContentDto,
} from './';

/**
 * Response attribute with content for object it belongs to
 * @export
 * @interface ResponseAttributeDto
 */
export interface ResponseAttributeDto {
    /**
     * UUID of the Attribute
     * @type {string}
     * @memberof ResponseAttributeDto
     */
    uuid?: string;
    /**
     * Name of the Attribute
     * @type {string}
     * @memberof ResponseAttributeDto
     */
    name: string;
    /**
     * Label of the the Attribute
     * @type {string}
     * @memberof ResponseAttributeDto
     */
    label: string;
    /**
     * @type {AttributeType}
     * @memberof ResponseAttributeDto
     */
    type: AttributeType;
    /**
     * @type {AttributeContentType}
     * @memberof ResponseAttributeDto
     */
    contentType: AttributeContentType;
    /**
     * Content of the Attribute
     * @type {Array<BaseAttributeContentDto>}
     * @memberof ResponseAttributeDto
     */
    content?: Array<BaseAttributeContentDto>;
}


