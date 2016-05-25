package com.itbegin.outprojs.microcard.utils;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.IOFileFilter;
import org.apache.commons.io.filefilter.TrueFileFilter;
import org.springframework.util.StringUtils;

public class CountLinesUtil {
	public static Map<String, Integer> lineCounterOfDir (String dirPath,IOFileFilter ioFileFilter) throws IOException {
		File dir=new File(dirPath);
		if(!dir.isDirectory()){
			return null;
		}
		int totalLines = 0, commentsLines = 0, spaceLines=0,codeLines=0;
		List<File> files = (List<File>) FileUtils.listFiles(dir,ioFileFilter,
				TrueFileFilter.INSTANCE);
		for (File file : files) {
			Map<String, Integer> fileCountMap=lineCounter(file);
			totalLines+=fileCountMap.get("totalLines");
			commentsLines+=fileCountMap.get("commentsLines");
			spaceLines+=fileCountMap.get("spaceLines");
			codeLines+=fileCountMap.get("codeLines");
		}
		Map<String, Integer> countMap=new HashMap<String, Integer>();
		countMap.put("totalLines", totalLines);
        countMap.put("commentsLines", commentsLines);
        countMap.put("spaceLines", spaceLines);
        countMap.put("codeLines", codeLines);
		return countMap;
	}
	
	
	/**
	 * 统计文件行数信息
	 * totalLines  文件总行数
	 * commentsLines 评论行数
	 * spaceLines  空行数
	 * codeLines 代码行数
	 * @param path
	 * @return
	 * @throws IOException
	 */
	
	static Map<String, Integer> lineCounter (File file) throws IOException {
		
        int totalLines = 0, commentsLines = 0, spaceLines=0,codeLines=0;
        boolean commentFlag=false;//多行注释flag默认为false
        Scanner input = new Scanner(file);
        while (input.hasNextLine()) {
            String data = input.nextLine();
            data=StringUtils.trimWhitespace(data);
            if(data.endsWith("*/")){
            	commentsLines++;
            	commentFlag=false;
            }else if(commentFlag){
            	commentsLines++;
            }else if(data.startsWith("/*")){
            	commentFlag=true;
            	commentsLines++;
            }else if(data.equals("")){
            	spaceLines++;
            }else if(data.startsWith("//")){
            	commentsLines++;
            }else{
            	codeLines++;
            }

            totalLines++;
        }
        Map<String, Integer> countMap=new HashMap<String, Integer>();
        countMap.put("totalLines", totalLines);
        countMap.put("commentsLines", commentsLines);
        countMap.put("spaceLines", spaceLines);
        countMap.put("codeLines", codeLines);
        input.close();
        return countMap;
    }
	public static void main(String[] args) {
		try {
			Map<String, Integer> map=CountLinesUtil.lineCounterOfDir("/Users/caoyongzheng/javaApps/microcard",new MyIOFileFilter(false,".java") );
//			Map<String, Integer> map=CountLinesUtil.lineCounterOfDir("/Users/caoyongzheng/javaApps/microcard/src/main/resources/static/src",new MyIOFileFilter(false,"") );
			System.out.println("totalLines:"+map.get("totalLines"));
			System.out.println("commentsLines:"+map.get("commentsLines"));
			System.out.println("spaceLines:"+map.get("spaceLines"));
			System.out.println("codeLines:"+map.get("codeLines"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

class MyIOFileFilter implements IOFileFilter{
	
	boolean ignore;
	String[] suffixs;
	
	
	public MyIOFileFilter(boolean ignore,String...suffixs){
		this.ignore=ignore;
		this.suffixs=suffixs;
	}
	
	@Override
	public boolean accept(File file) {
		return isAccept(file.getName());
	}

	@Override
	public boolean accept(File dir, String name) {
		return false;
	}
	
	public boolean isAccept(String filename){
		for (String suffix : suffixs) {
			if(filename.endsWith(suffix)){
				return !ignore;
			}
		}
		return ignore;
	}
}

