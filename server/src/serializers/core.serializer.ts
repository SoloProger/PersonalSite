import it from 'node:test';

export default class CoreSerializer {
  public static transform(data: any) {


    return data.map((item: any) => {
      const transformData: any = {};
      item.title && (transformData['title'] = item.title);
      item.path && (transformData['path'] = item.path);
      item.link_title && (transformData['linkTitle'] = item.link_title);
      item.is_button && (transformData['isButton'] = item.is_button);
      item.button_name && (transformData['buttonName'] = item.button_name);
      item.description && (transformData['description'] = item.description);
      item.body && (transformData['body'] = item.body);
      item.link && (transformData['link'] = item.link);
      item.icon && (transformData['icon'] = item.icon);
      item.img && (transformData['img'] = item.img);
      item.name && (transformData['name'] = item.name);
      return transformData;
    });
  }
}