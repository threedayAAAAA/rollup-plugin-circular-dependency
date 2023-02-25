import type { FilterPattern } from '@rollup/pluginutils'
import type { ModuleNode } from '../module/moduleNode'

export type CircleData = Record<string, ModuleNode['moduleId'][][]>

export interface Options {
    /**
     * Rules to include transforming target.
     *
     * @default [/\.[jt]sx?$/, /\.vue\??/]
     */
    include?: FilterPattern

    /**
     * Rules to exclude scan target.
     *
     * @default [/node_modules/, /\.git/]
     */
    exclude?: FilterPattern

    /**
     * The file address of the scan result output, the default console print
     */
    outputFilePath?: string

    /**
     * Whether the scan result shows the absolute path of the module
     *
     * @default false
     */
    moduleAbsolutePath?: boolean

    /**
     * Whether to throw an error when a circular import exists
     *
     * @default true
     */
    circleImportThrowErr?: boolean

    /**
     * The result of formatted output 
     * will also affect the data format in the console print or output file
     *
     * @default (data: CircleData) => data
     */
    formatOut?: (data: CircleData) => any
}