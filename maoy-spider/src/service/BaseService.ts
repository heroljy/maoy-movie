import {getManager, Repository} from 'typeorm';
/**
 * 数据库操作基类
 */
export class BaseService<T>{
    protected repository: Repository<T>;
    constructor(tableName: string){
        this.repository = getManager().getRepository(tableName);
    }
    /**
     * @description 新增
     * @param entity 
     */
    public add(entity): Promise<T>{
        return this.repository.save(entity);
    }
    /**
     * @description 条件查询
     * @param entity 条件 
     */
    public query(entity: T): Promise<T[]> {
        return this.repository.find(entity);
    }
    /**
     * @description 根据主键查询
     * @param id 主键
     */
    public queryByPrimaryKey(id): Promise<T>{
        return this.repository.findOneById(id);
    }
}