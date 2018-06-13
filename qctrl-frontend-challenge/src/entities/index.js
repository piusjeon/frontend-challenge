export const reduceEntityDataArray = (entities, data = []) => {
	return data.reduce( (obj, entity) => (obj[entity.id] = entity, obj), {})
};

export const mapEntitiesToRelationData = entities => {
	return entities.map( entity => ({type: entity.type, id: entity.id }) )
};
