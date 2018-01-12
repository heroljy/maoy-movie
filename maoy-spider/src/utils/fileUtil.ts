import * as fs from "fs";

/**
 * 文件操作类
 */
export class FileUtil{
    constructor(){}
    /**
     * @description 读取文件
     * @param url 
     */
    public static readFile(url: string): Promise<string>{
        var promise = new Promise<string>((resolve, reject) => {
            fs.readFile(url,"utf-8",(err, res) => {
                if(!err){
                    resolve(res)
                }else {
                    reject(err);
                }
            })
        });
        return promise;
    }
}